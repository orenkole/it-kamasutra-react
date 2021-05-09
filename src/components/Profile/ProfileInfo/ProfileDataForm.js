import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../Common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";
import styles from "../../Common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({profile, isOwner, handleSubmit, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {isOwner && <button>save</button>}
                    {error && 
                        <div className={styles.formSummaryError}>
                            {error}
                        </div>
                    }
                    <div>
                        <b>Full name:</b> {createField("Full name", "FullName", [], Input)}
                    </div>
                    <div>
                        <b>Looking for a job:</b> {createField("", "LookingForAJob", [], Input, {type: "checkbox"})}
                    </div>
                    <div>
                        <b>My professinal skills:</b> {createField("My professional skills", "LookingForAJobDescription", [], Textarea)}
                    </div>
                    <div>
                        <b>About me:</b> {createField("About Me", "AboutMe", [], Textarea)}
                    </div>
                    <div>
                        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => (
                            <div className={s.contact} key={key}>
                                <b>{key}: {createField(key, `contacts.${key}`, [], Input)}</b>
                            </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm;