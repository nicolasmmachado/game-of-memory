import * as C from "./App.styles";
import logo from "./assets/devmemory_logo.png";
import RestartIcon from "./svgs/restart.svg";
import { InfoItem } from "./components/InfoItem";
import { ResetButton } from "./components/ResetButton";
import { useEffect, useState } from "react";
import { GridItemType } from "./types/GridItemType";
import { GridItem } from "./components/GridItem";
import { items } from "./data/items";
import { TimeElapsed } from "./helpers/FormatTimeElapsed"

function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);



  useEffect(() => resetAndCreateGrid(), [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => {
    if (showCount === 2) {
      setMoveCount(moveCount + 1);
      let twisted = gridItems.filter(item => item.show === true)
      if (twisted.length === 2) {
        //if both are equal make keepShow permanent
        if (twisted[0].item === twisted[1].item) {
          let tempGridItem = [...gridItems]
          for (let i in twisted) {
            twisted[i].keepShow = true;
            twisted[i].show = false;
          }
          setGridItems(tempGridItem);
          setShowCount(0);
          if(tempGridItem.every(item => item.keepShow === true)){
            alert("You Win!!!");
            setPlaying(false);
          }
        }
        else {
          setTimeout(() => {
            for (let i in twisted) {
              twisted[i].show = false;
            }
          }, 1000);
          setShowCount(0);
        }
      }
    }
  }, [showCount, gridItems])

  const resetAndCreateGrid = () => {
    //1: Resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCount(0);
    //setPlay(false);       Tanto o setPlay e GridItems serão zerados/voltarão sempre para 1 tipo especifico, o react executa a função como um todo, logo n adianta colocar false e depois true pq ele só considerará o ultimo que ocorrer e mudar o state.
    //setGridItems([]);

    //2: Criar um grid vazio
    let tempGridItem: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) {
      tempGridItem.push({
        item: null,
        show: false,
        keepShow: false
      })
    }

    //3: Preencher o grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let position = -1;
        while (position < 0 || tempGridItem[position].item !== null) {
          position = Math.floor(Math.random() * (items.length * 2));
        }
        tempGridItem[position].item = i;
      }
    }

    //4: Jogar no state
    setGridItems(tempGridItem);

    //5: Começar o jogo
    setPlaying(true);


  }

  const handleItemClick = (index: number) => {
    if (playing && showCount < 2) {
      let tempGridItem = [...gridItems]
      if (!gridItems[index].show && !gridItems[index].keepShow) {
        tempGridItem[index].show = true;
        setShowCount(showCount + 1);
      }
      setGridItems(tempGridItem);
    }
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logo} alt="Logo" width="200px" />
        </C.LogoLink>
        <C.InfoArea>
          <InfoItem label="Tempo" value={TimeElapsed(timeElapsed)} />
          <InfoItem label="Jogadas" value={`${moveCount}`} />
        </C.InfoArea>
        <ResetButton text="Recomeçar" icon={RestartIcon} onClick={resetAndCreateGrid} />
      </C.Info>

      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem key={index} item={item} onClick={() => handleItemClick(index)}></GridItem>
          ))}

        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;
