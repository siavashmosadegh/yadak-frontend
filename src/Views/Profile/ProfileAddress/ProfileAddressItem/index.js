import AddressPinLocationIcon from "../../../../Icons/Profile/AddressPinLocationIcon";
import OptionsVerticalIcon from "../../../../Icons/Profile/OptionsVerticalIcon";
import { AddressItemWrapper } from "./styles";

const ProfileAddressItem = (props) => {

    const {
        postalAddress,
        pelak,
        vahed,
        zipCode
    } = props;

    return (
        <AddressItemWrapper>
            <div className="optionsItemWrapper">
                <OptionsVerticalIcon />
            </div>

            <div className="contentWrapper">
                <p>آدرس پستی : {postalAddress}</p>

                <p>پلاک : {pelak}</p>

                <p>واحد : {vahed}</p>

                <p>کد پستی : {props.zipCode}</p>

                {/* <p>گیرنده</p> */}
            </div>
            
            <div className="locationItemWrapper">
                <AddressPinLocationIcon />
            </div>
        </AddressItemWrapper>
    );
}

export default ProfileAddressItem;