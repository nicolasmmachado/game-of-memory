import { GridItemType } from "../../types/GridItemType";
import * as C from "./styles";
import b7Svg from "../../svgs/b7.svg"
import {items} from "../../data/items"

type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({item, onClick}: Props) => {
    return(
        <C.Container onClick={onClick} backColor = {item.keepShow || item.show }>
            {!item.keepShow && !item.show && 
                <C.Icon src={b7Svg} alt="logoB7Web" opacity={.6}/>
            }
            {(item.keepShow || item.show) && item.item !== null &&
                <C.Icon src={items[item.item].icon } />
            }
        </C.Container>
    )
}