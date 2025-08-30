import { inherits } from "util"

export function MouseIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 27C64 23.9796 63.4051 20.9888 62.2492 18.1983C61.0934 15.4078 59.3992 12.8723 57.2635 10.7365C55.1277 8.6008 52.5922 6.90663 49.8017 5.75077C47.0112 4.59491 44.0204 4 41 4L41 27H64Z" fill="#EE701D" />
            <path d="M16 27C16 23.9796 16.5949 20.9888 17.7508 18.1983C18.9066 15.4078 20.6008 12.8723 22.7365 10.7365C24.8723 8.6008 27.4078 6.90663 30.1983 5.75077C32.9888 4.59491 35.9796 4 39 4L39 27H16Z" fill="#F29145" />
            <path d="M16 29H64V52.5C64 65.4787 53.4787 76 40.5 76H39.5C26.5213 76 16 65.4787 16 52.5V29Z" fill="#E05816" />
        </svg>
    )
}

export const MonitorIcon = () => {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16C12 12.6863 14.6863 10 18 10H62C65.3137 10 68 12.6863 68 16V41H12V16Z" fill="#E05816" />
            <path d="M12 48C12 51.3137 14.6863 54 18 54H62C65.3137 54 68 51.3137 68 48V43H12V48Z" fill="#EE701D" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M39 56C38.4477 56 38 56.4477 38 57V63H30.5C29.1193 63 28 64.1193 28 65.5V66.5C28 67.8807 29.1193 69 30.5 69H51.5C52.8807 69 54 67.8807 54 66.5V65.5C54 64.1193 52.8807 63 51.5 63H44V57C44 56.4477 43.5523 56 43 56H39Z" fill="#F29145" />
        </svg>
    )
}

export const HeadphonesIcon = () => {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 44C11 42.8954 11.8954 42 13 42H21C26.5228 42 31 46.4772 31 52V58C31 63.5228 26.5228 68 21 68H13C11.8954 68 11 67.1046 11 66V44Z" fill="#E05816" />
            <path d="M69 44C69 42.8954 68.1046 42 67 42H59C53.4772 42 49 46.4772 49 52V58C49 63.5228 53.4772 68 59 68H67C68.1046 68 69 67.1046 69 66V44Z" fill="#EE701D" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M66.7925 29.2849C68.2499 32.682 69 36.323 69 40H65.4248C65.3614 36.8883 64.7072 33.8141 63.4941 30.936C62.2161 27.9038 60.3429 25.1486 57.9814 22.8279C55.6199 20.5071 52.8165 18.6662 49.7311 17.4102C46.6457 16.1543 43.3387 15.5078 39.9991 15.5078C36.6595 15.5078 33.3526 16.1543 30.2672 17.4102C27.1818 18.6662 24.3783 20.5071 22.0169 22.8279C19.6554 25.1486 17.7822 27.9038 16.5042 30.936C15.2911 33.8141 14.6368 36.8883 14.5735 40H11C11 36.323 11.7501 32.682 13.2075 29.2849C14.6649 25.8877 16.801 22.8011 19.4939 20.201C22.1868 17.601 25.3837 15.5385 28.9022 14.1314C32.4206 12.7242 36.1917 12 40 12C43.8083 12 47.5794 12.7242 51.0978 14.1314C54.6163 15.5385 57.8132 17.601 60.5061 20.201C63.199 22.8011 65.3351 25.8877 66.7925 29.2849Z" fill="#F29145" />
        </svg>
    )
}

export const KeyboardIcon = () => {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 28C11 26.8954 11.8954 26 13 26H67C68.1046 26 69 26.8954 69 28V36H11V28Z" fill="#F29145" />
            <path d="M11 64C11 65.1046 11.8954 66 13 66H67C68.1046 66 69 65.1046 69 64V56H11V64Z" fill="#EE701D" />
            <rect x="12" y="38" width="4" height="4" fill="#E05816" />
            <rect x="17" y="38" width="4" height="4" fill="#E05816" />
            <rect x="22" y="38" width="4" height="4" fill="#E05816" />
            <rect x="27" y="38" width="4" height="4" fill="#E05816" />
            <rect x="32" y="38" width="4" height="4" fill="#E05816" />
            <rect x="37" y="38" width="4" height="4" fill="#E05816" />
            <rect x="42" y="38" width="4" height="4" fill="#E05816" />
            <rect x="47" y="38" width="4" height="4" fill="#E05816" />
            <rect x="52" y="38" width="4" height="4" fill="#E05816" />
            <rect x="57" y="38" width="4" height="4" fill="#E05816" />
            <rect x="62" y="38" width="4" height="4" fill="#E05816" />
            <rect x="14" y="44" width="4" height="4" fill="#E05816" />
            <rect x="19" y="44" width="4" height="4" fill="#E05816" />
            <rect x="24" y="44" width="4" height="4" fill="#E05816" />
            <rect x="29" y="44" width="4" height="4" fill="#E05816" />
            <rect x="34" y="44" width="4" height="4" fill="#E05816" />
            <rect x="39" y="44" width="4" height="4" fill="#E05816" />
            <rect x="44" y="44" width="4" height="4" fill="#E05816" />
            <rect x="49" y="44" width="4" height="4" fill="#E05816" />
            <rect x="54" y="44" width="4" height="4" fill="#E05816" />
            <rect x="59" y="44" width="4" height="4" fill="#E05816" />
            <rect x="64" y="44" width="4" height="4" fill="#E05816" />
            <rect x="12" y="50" width="4" height="4" fill="#E05816" />
            <rect x="17" y="50" width="4" height="4" fill="#E05816" />
            <rect x="22" y="50" width="4" height="4" fill="#E05816" />
            <rect x="27" y="50" width="4" height="4" fill="#E05816" />
            <rect x="32" y="50" width="4" height="4" fill="#E05816" />
            <rect x="37" y="50" width="4" height="4" fill="#E05816" />
            <rect x="42" y="50" width="4" height="4" fill="#E05816" />
            <rect x="47" y="50" width="4" height="4" fill="#E05816" />
            <rect x="52" y="50" width="4" height="4" fill="#E05816" />
            <rect x="57" y="50" width="4" height="4" fill="#E05816" />
            <rect x="62" y="50" width="4" height="4" fill="#E05816" />
            <path d="M59 23V19.4286H21V13H59" stroke="#F29145" stroke-width="2" stroke-linecap="round" />
        </svg>
    )
}
export const WebcamIcon = () => {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="28" y="12" width="24" height="9" rx="2" fill="#EE701D" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 23C12.6863 23 10 25.6863 10 29V61C10 64.3137 12.6863 67 16 67H64C67.3137 67 70 64.3137 70 61V29C70 25.6863 67.3137 23 64 23H16ZM40 58C47.1797 58 53 52.1797 53 45C53 37.8203 47.1797 32 40 32C32.8203 32 27 37.8203 27 45C27 52.1797 32.8203 58 40 58Z" fill="#E05816" />
            <circle cx="40" cy="45" r="10" fill="#F29145" />
        </svg>
    )
}

export const CartIcon = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H3.5L5.5 15H16M16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15ZM5.07142 12H17L20 3H3.78571M10 17C10 18.1046 9.10457 19 8 19C6.89543 19 6 18.1046 6 17C6 15.8954 6.89543 15 8 15C9.10457 15 10 15.8954 10 17Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export const Tick = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1.25L4.75008 9.49997L1 5.75" stroke="#262626" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const FilterArrow = () => {
    return (
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 9L17 1" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export const PlusSign = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1V11M1 6H11" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export const MinusSign = () => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H11" stroke="#E7E7E7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export const QuestionMarkCircled = () => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 21.25V21.2411M15 18.5714C15 14.5536 18.75 15.4464 18.75 12.3214C18.75 10.349 17.0711 8.75 15 8.75C13.3209 8.75 11.8995 9.80103 11.4217 11.25M26.25 15C26.25 21.2132 21.2132 26.25 15 26.25C8.7868 26.25 3.75 21.2132 3.75 15C3.75 8.7868 8.7868 3.75 15 3.75C21.2132 3.75 26.25 8.7868 26.25 15Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export const XSign = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 1.25L1.25 18.75M1.25004 1.25L18.7501 18.75" stroke="#262626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export const Bell = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.99982 17.5V18.5C8.99982 20.1569 10.343 21 11.9998 21C13.6567 21 14.9998 20.1569 14.9998 18.5V17.5M5.9998 8.5C5.9998 5.18629 8.6861 3.5 11.9998 3.5C15.3135 3.5 17.9998 5.18629 17.9998 8.5C17.9998 10.4392 18.7049 12.6133 19.4314 14.3389C20.0346 15.7717 19.022 17.5 17.4674 17.5H6.53219C4.9776 17.5 3.965 15.7717 4.56823 14.3389C5.29474 12.6133 5.9998 10.4392 5.9998 8.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export const Message = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C5.11765 3 3 4.64706 3 10C3 13.7383 4.0328 15.6692 7 16.4939V21L11.0124 16.9876C11.3301 16.996 11.6592 17 12 17C18.8824 17 21 15.3529 21 10C21 4.64706 18.8824 3 12 3Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export const Search = () => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}


