import profileIconWhite from "../../../assets/images/profileIconWhite.png";
import cartIconWhite from "../../../assets/images/cartIconWhite.png";
import locationIcon from "../../../assets/images/locationIcon.png";
import logoutIconWhite from "../../../assets/images/logoutIconWhite.png";


export const BUTTONS = [
    {
        label: "Perfil",
        icon: profileIconWhite,
        navigateTo: "Profile"
    },
    {
        label: "Enderecos",
        icon: locationIcon,
        navigateTo: "ProfileAddress"
    },
    {
        label: "Meus pedidos",
        icon: cartIconWhite,
        navigateTo: "ProfileOrders"
    },
    {
        label: "Sair",
        icon: logoutIconWhite,
        navigateTo: "Home"
    },
];