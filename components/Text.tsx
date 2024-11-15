import {Text as CustomText, TextProps} from "react-native"

interface Props {
    className?: string
    children: string
    textProps?: TextProps
}

export default function Text({children, className, textProps}: Props) {
    return (
        <CustomText
            className={`${className} pt-2 leading-9`}
            style={{fontFamily: "Noto"}}
            {...textProps}
        >
            {children}
        </CustomText>
    )
}
