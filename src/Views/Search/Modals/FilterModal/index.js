import React from 'react';
import { FilterModalWrapper } from './styles';
import { useDispatch } from 'react-redux';
import SearchActions from '../../../../Redux/Search/Actions';
import CustomModal from '../../../../UI-Kit/CustomModal';

const FilterModal = () => {

    const dispatch = useDispatch();

    return (
        <CustomModal
            width="100%"
            height="100%"
            closeCustomModalHandler={() => dispatch(SearchActions.closeFilterModalHandler({}))}
            headerTitle="فیلتر ها"
            modalBackgroundColor="#FFFFFF"
            headerHeight="50px"
            mediaQueryBreakpoint="1100px"
        >
            <FilterModalWrapper>
                Siavash
            </FilterModalWrapper>
        </CustomModal>
    );
}
    
export default FilterModal;