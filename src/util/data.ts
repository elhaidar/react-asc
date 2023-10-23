export const SECRET_CODE = "testProbation"

type dataNavLinkType = {
    title: string;
    path: string;
}

export const dataNavLink: dataNavLinkType[] = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Sell",
        path: "/product"
    },
    {
        title: "Rent",
        path: "/rent"
    },
    {
        title: "About",
        path: "/about"
    },
];

export const dataAuthLink: dataNavLinkType[] = [
    {
        title: "Log In",
        path: "/login"
    },
    {
        title: "Create Account",
        path: "/register"
    },
]

export type PropertyType = {
    id: number;
    property_name: string;
    alamat: string;
    is_premium: boolean;
    image_url: string;
    description: string;
} 

