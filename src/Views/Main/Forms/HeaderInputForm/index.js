import { Formik } from 'formik';
import React from 'react';
import { FormContainer } from './styles';
import FormHandler from '../../../../Util/FormHandlers';

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
                    </form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default HeaderInputForm;