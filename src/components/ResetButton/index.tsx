import * as C from "./styles";

type Props = {
    text: string;
    icon: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;

}

export const ResetButton = ({ text, icon, onClick }: Props) => {

    return (
        <C.Container onClick={onClick}>
            <C.IconArea>
                <C.Icon src={icon}/>
            </C.IconArea>
            <C.Label>
                {text}
            </C.Label>
        </C.Container>
    )
}