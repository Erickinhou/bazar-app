import profileIconWhite from "../../../assets/images/profileIconWhite.png";
import cartIconWhite from "../../../assets/images/cartIconWhite.png";
import favoriteIconWhite from "../../../assets/images/favoriteIconWhite.png";
import bagIconWhite from "../../../assets/images/bagIconWhite.png";
import settingsIconWhite from "../../../assets/images/settingsIconWhite.png";
import logoutIconWhite from "../../../assets/images/logoutIconWhite.png";


export const buttons = [
    {
        label: "Perfil",
        icon: profileIconWhite,
        navigateTo: "ProfileMenu"
    },
    {
        label: "Meus pedidos",
        icon: cartIconWhite,
        navigateTo: "Dashboard"
    },
    {
        label: "Favoritos",
        icon: favoriteIconWhite,
        navigateTo: "Dashboard"
    },
    {
        label: "Entrega",
        icon: bagIconWhite,
        navigateTo: "Dashboard"
    },
    {
        label: "Configuracoes",
        icon: settingsIconWhite,
        navigateTo: "Dashboard"
    },
    {
        label: "Sair",
        icon: logoutIconWhite,
        navigateTo: "Home"
    },
];