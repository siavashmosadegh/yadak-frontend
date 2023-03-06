import { Modal } from '@mui/material';
import React from 'react';
import MultiplyIcon from '../../../../Icons/ProductIcons/MultiplyIcon';
import { FilterModalWrapper } from './styles';
import { useDispatch } from 'react-redux';
import SearchActions from '../../../../Redux/Search/Actions';

const FilterModal = () => {

    const dispatch = useDispatch();

    return (
        <Modal
            open={true}
        >
            <FilterModalWrapper>
                <div className="header">
                    <span>فیلتر ها</span>

                    <span
                        onClick={() => dispatch(SearchActions.closeFilterModalHandler({}))}
                    >
                        <MultiplyIcon />
                    </span>
                </div>
            </FilterModalWrapper>
        </Modal>
    );
}

export default FilterModal;