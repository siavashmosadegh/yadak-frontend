import { Formik } from 'formik';
import React from 'react';
import { FormContainer, MagnifierIconContainer } from './styles';
import FormHandler from '../../../../Util/FormHandlers';
import MagnifierIcon from '../../../../Icons/Profile/MagnifierIcon';

const HeaderInputForm = () => {
    return (
        <FormContainer>
            <Formik
                initialValues={{
                    searchBar: ""
                }}
                validationSchema=""
                onSubmit={(values, action) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <input
                            name="searchBar"
                            value={formik.values.searchBar}
                            onChange={(e) => FormHandler.onChange(e,formik)}
                            placeholder="جستجو"
                        />

                        <button
                            type="submit"
                        >
                            <MagnifierIconContainer>
                                <MagnifierIcon />
                            </MagnifierIconContainer>
                        </button>
                    </form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default HeaderInputForm;