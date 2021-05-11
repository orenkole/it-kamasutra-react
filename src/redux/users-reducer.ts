import { userAPI } from "../api/api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, // array of users ids
}

type InitiStateType = typeof initialState; 

const usersReducer = (state = initialState, action: any): InitiStateType => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
        // users: state.users.map(user => {
        //   if(user.id === action.userId) {
        //     return {...user, followed: true}
        //   }
        //   return user;
        // })
      };
    case UNFOLLOW:
      return {
        ...state,
        users:  updateObjectInArray(state.users, action.userId, "id", {followed: false})
      };
    case SET_USERS:
      return {...state, users: action.users};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalCount};
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case TOGGLE_IS_FOLLOWING_PROGRESS: 
      return {
        ...state, 
        followingInProgress: action.isFetching 
        ? [...state.followingInProgress, action.userId]     
        : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}

export const followSuccess = (userId: number): FollowSuccessActionType => (
  {type: FOLLOW, userId: userId}
);


type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => (
  {type: UNFOLLOW, userId: userId}
)

type SetUsersActionType = {
  type: typeof SET_USERS
  userId: Array<UserType>
}

export const setUsers = (users: Array<UserType>) => (
  {type: SET_USERS, users}
)

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => (
  {type: SET_CURRENT_PAGE, currentPage}
)

type setUsersTotalCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT, totalCount: number
}

export const setUsersTotalCount = (totalCount: number): setUsersTotalCountActionType => (
  {type: SET_TOTAL_USERS_COUNT, totalCount}
)

type ToggleIsFetchingActionType = {type: typeof TOGGLE_IS_FETCHING, isFetching: boolean}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => (
  {type: TOGGLE_IS_FETCHING, isFetching}
)

type ToggleFollowingProgressActionType = {type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: number}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => (
  {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
);

export const requestUsers = (page: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page))
    const data = await userAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
  }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId)
  if(response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
} 

export const follow = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch, 
      userId, 
      userAPI.follow.bind(userAPI), 
      followSuccess
    )
  }
}

export const unfollow = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch, 
      userId, 
      userAPI.unfollow.bind(userAPI), 
      unfollowSuccess
    )
  }
}

export default usersReducer;
