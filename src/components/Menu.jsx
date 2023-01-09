const MenuItemsConnected = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

const MenuItemsNotConnected = [
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
];

export default function Menu(isLoggedIn) {

    const MenuItems = isLoggedIn === true ? MenuItemsConnected : MenuItemsNotConnected;

    const listMenuItems = MenuItems.map((item, index) => (
        <li key={index}>
            <a href={item.path}>{item.name}</a>
        </li>
    ));

    return (
        <ul>{listMenuItems}</ul>
    )
};