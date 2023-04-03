import React from 'react';
import {
    FormContainer,
    Form,
    MagnifierIconContainer
} from './styles';
import { Formik } from 'formik';
import FormHandlers from '../../../../Util/FormHandlers';
import MagnifierIcon from '../../../../Icons/Profile/MagnifierIcon';

const SearchOrdersForm = () => {
    return (
        <FormContainer>
            <Formik
                initialValues={{
                    searchBar: null
                }}
                validationSchema=""
                onSubmit={(values, action) => {
                    console.log(values);
                }}
            >
                {(formik) => (
                    <Form
                        onSubmit={formik.handleSubmit}
                    >
                        <input
                            name="searchBar"
                            value={formik.values.searchBar}
                            onChange={(e) => FormHandlers.onChange(e,formik)}
                            placeholder="جستجو"
                        />

                        <button
                            type="submit"
                        >
                            <MagnifierIconContainer>
                                <MagnifierIcon />
                            </MagnifierIconContainer>
                        </button>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
}

export default SearchOrdersForm;

