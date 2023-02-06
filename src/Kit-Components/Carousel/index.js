import React, { useState, useEffect } from "react";
import {
    CarouseWrapper,
    CarouselCellContainer,
    CarouselCell,
    CarouselButtonContainer
} from "./styles";
import Row from "../Row";
import Button from "../Button";
import LineArrowIcon from "../../Icons/LineArrowIcon";

var passedTranslate = 0
var passedTranslateIndex = 0
const Carousel = (props) => {
    const { name, isDragable } = props
    const { rowConfig, columnConfig } = props.options
    const [hasNext, setHasNext] = useState(true)
    const [hasPrevious, setHasPrevious] = useState(false)
    let items = [...props.children]

    const takeGenerator = () => {
        // let width = process.browser && window.innerWidth
        let width = window.innerWidth
        if (width > 1367) {
            return rowConfig.xl * columnConfig.xl
        } else if (width < 1367 && width >= 996) {
            return rowConfig.lg * columnConfig.lg
        } else if (width < 996 && width >= 768) {
            return rowConfig.md * columnConfig.md
        } else if (width < 768 && width >= 480) {
            return rowConfig.sm * columnConfig.sm
        } else {
            return rowConfig.xs * columnConfig.xs
        }
    }
    
    const getColumnNumber = () => {
        // let width = process.browser && window.innerWidth
        let width = window.innerWidth
        if (width > 1367) {
            return columnConfig.xl
        } else if (width < 1367 && width >= 996) {
            return columnConfig.lg
        } else if (width < 996 && width >= 768) {
            return columnConfig.md
        } else if (width < 768 && width >= 480) {
            return columnConfig.sm
        } else {
            return columnConfig.xs
        }
    }

    const getRowNumber = () => {
        // let width = process.browser && window.innerWidth
        let width = window.innerWidth
        if (width > 1367) {
            return rowConfig.xl
        } else if (width < 1367 && width >= 996) {
            return rowConfig.lg
        } else if (width < 996 && width >= 768) {
            return rowConfig.md
        } else if (width < 768 && width >= 480) {
            return rowConfig.sm
        } else {
            return rowConfig.xs
        }
    }

    const [skip, setSkip] = useState(0)
    const [renderItems, setRenderItems] = useState([])

    useEffect(() => {
        let newRenderItems = [...renderItems]
        if (items.length > 0) {
            newRenderItems = items.length > 0 && items.splice(skip, skip + take)
            setRenderItems([...newRenderItems])
        }
    }, [])

    useEffect(() => {
        if (skip + take >= props.children.length) {
            setHasNext(false)
        }
        if (skip === 0) {
            setHasPrevious(false)
        }
    }, [])

    let take = takeGenerator()
    let columnNumber = getColumnNumber()
    let rowNumber = getRowNumber()
    let dragStart, dragEnd = null
    let dragPosition = "right"
    let container = document.querySelector(`.bict__carouselCellContainer${name}`)
    let wrapper = document.querySelector(`.bict__carouselWrapper${name}`)

    let cell = document.querySelector(`.bict__carouselCell${name}`)
    let containerScrollWidth = container ? container.scrollWidth : 0
    let wrapperScrollWidth = wrapper ? wrapper.scrollWidth : 0
    let cellWidth = cell ? cell.clientWidth : 0
    let pageCount = container ? Math.floor(container.childElementCount / take) + 1 : 0
    var columnsCoordinates = []

    // useMemo(() => {
    if (container) {
        for (let i = 0; i < container.childElementCount; i++) {
            columnsCoordinates.push({
                startX: i * cellWidth,
                middleX: ((i * cellWidth + cellWidth) + (i * cellWidth)) / 2,
                endX: i * cellWidth + cellWidth
            })
        }
    }
    // }, [container])

    const getTranslate = (clientX, direction) => {
        let clientXRangeIndex = columnsCoordinates.findIndex(each => each.startX <= clientX && each.endX > clientX)
        let finalTranslateRatio = 0
        let finalTranslate = 0
        finalTranslateRatio = direction === "right" ? clientXRangeIndex + 1 : clientXRangeIndex
        finalTranslate = finalTranslateRatio * cellWidth
        return [finalTranslate, finalTranslateRatio]
    }

    const onDragStartHandler = (e) => {
        e.dataTransfer.dropEffect = "none"
        dragStart = e.clientX
    }

    const onDragOverHandler = (e) => {
        e.dataTransfer.dropEffect = "none"
        let dragX = e.clientX
        dragPosition = dragX > dragStart ? "right" : "left"
        if (dragX < containerScrollWidth && dragX >= 0) {
            if (dragPosition === "right") {
                if (hasNext === true) {
                    container.style = `
                        transition-duration: 0ms;
                        transform: translate3d(${passedTranslate + 7}px, 0px, 0px);
                    `
                    passedTranslate = passedTranslate + (7)
                }
            } else {
                if (hasPrevious === true) {
                    container.style = `
                        transition-duration: 0ms;
                        transform: translate3d(${passedTranslate + 7}px, 0px, 0px);
                    `
                    passedTranslate = passedTranslate - (7)
                }
            }
        }
    }

    const onDragEndHandler = (e) => {
        dragEnd = e.clientX < 0
        if (dragPosition === "right") {
            if (hasNext) {
                passedTranslateIndex = getTranslate(passedTranslate, dragPosition)[1]
                passedTranslate = getTranslate(passedTranslate, dragPosition)[0]
                container.style = `
                    transition-duration: 0ms;
                    transform: translate3d(${passedTranslate}px, 0px, 0px);
                `
                let leftColumn = Math.floor(((container.childElementCount - take) / columnNumber) / rowNumber)
                setHasPrevious(true)
                if (passedTranslate >= leftColumn * cellWidth) {
                    setHasNext(false)
                } else {
                    setHasNext(true)
                }
            }
        } else {
            if (hasPrevious) {
                passedTranslateIndex = getTranslate(passedTranslate, dragPosition)[1]
                passedTranslate = getTranslate(passedTranslate, dragPosition)[0]
                container.style = `
                    transition-duration: 0ms;
                    transform: translate3d(${((passedTranslateIndex) * cellWidth)}px, 0px, 0px);
                `
                setHasNext(true)
                if (passedTranslate === 0) {
                    setHasPrevious(false)
                } else {
                    setHasPrevious(true)
                }
            }
        }
    }

    const [activeIndex, setActiveIndex] = useState((props.displayedCellsNumber-3)/2 + 1);
    
    const onNextHandler = () => {
        container.style = `
            transition-duration: 1000ms;
            transform: translate3d(${cellWidth + passedTranslate}px, 0px, 0px);
        `
        passedTranslate = passedTranslate + cellWidth
        if (passedTranslate + (take * cellWidth) >= container.childElementCount * cellWidth) {
            setHasNext(false)
        } else {
            if (hasNext === false) {
                setHasNext(true)
            }
        }
        if (hasPrevious === false) {
            setHasPrevious(true)
        }
        if (props.hasActiveCell) {
            setActiveIndex((passedTranslate+cellWidth)/cellWidth + (props.displayedCellsNumber-3)/2)
        }
    }

    const onPreviousHanlder = () => {
        container.style = `
            transition-duration: 1000ms;
            transform: translate3d(${passedTranslate - cellWidth}px, 0px, 0px);
        `
        passedTranslate = passedTranslate - cellWidth
        if (passedTranslate < (cellWidth)) {
            setHasPrevious(false)
        } else {
            if (hasPrevious === false) {
                setHasPrevious(true)
            }
        }
        if (hasNext === false) {
            setHasNext(true)
        }
        if (props.hasActiveCell) {
            setActiveIndex((passedTranslate+cellWidth)/cellWidth + (props.displayedCellsNumber-3)/2)
        }
    }

    return (
        name && <Row style={{ position: "relative" }}>
            <CarouseWrapper
                className={`bict__carouselWrapper bict__carouselWrapper${name}`}
            >
                <CarouselCellContainer
                    rowXlCount={rowConfig.xl}
                    rowLgCount={rowConfig.lg}
                    rowMdCount={rowConfig.md}
                    rowSmCount={rowConfig.sm}
                    rowXsCount={rowConfig.Xs}
                    className={`bict__carouselCellContainer bict__carouselCellContainer${name}`}
                    onDragOver={isDragable === true ? onDragOverHandler : null}
                    onDragStart={isDragable === true ? onDragStartHandler : null}
                    onDragEnd={isDragable === true ? onDragEndHandler : null}
                    draggable={isDragable}
                >
                    {
                        props.children.length > 0 && props.children.map((_, index) => {
                            return (
                                <CarouselCell
                                    height={`calc(100% /${rowConfig.xl})`}
                                    xl={24 / columnConfig.xl}
                                    lg={24 / columnConfig.xl}
                                    md={24 / columnConfig.md}
                                    sm={24 / columnConfig.sm}
                                    xs={24 / columnConfig.xs}
                                    wrapperWidth={wrapperScrollWidth}
                                    className={`bict__carouselCell bict__carouselCell${name} ${props.hasActiveCell ? activeIndex === index ? "active-caroucel-cell" : "" : ""}`}
                                >
                                    {_}
                                </CarouselCell>
                            )
                        })
                    }
                </CarouselCellContainer>
                <CarouselButtonContainer
                    show={props.children.length > take}
                    className="bict_carousel_btnsContainer"
                >
                    <Button
                        id={`${name}_carousel_previous_button`}
                        width={"30px"}
                        height={"30px"}
                        variant="default"
                        onClick={() => onPreviousHanlder(passedTranslate)}
                        disabled={!hasPrevious}
                    >
                        <LineArrowIcon rotate={270} fill={hasPrevious === false ? (props.theme && props.theme.primary) : "white"} />
                    </Button>
                    <Button
                        id={`${name}_carousel_next_button`}
                        width={"30px"}
                        height={"30px"}
                        variant="default"
                        onClick={onNextHandler}
                        disabled={!hasNext}
                    >
                        <LineArrowIcon rotate={90} fill={hasNext === false ? (props.theme && props.theme.primary) : "white"} />
                    </Button>
                </CarouselButtonContainer>
            </CarouseWrapper>
        </Row>
    );
};

Carousel.defaultProps = {
    options: {
        rowConfig: {
            xl: 1,
            lg: 1,
            md: 1,
            sm: 1,
            xs: 1
        },
        columnConfig: {
            xl: 1,
            lg: 1,
            md: 1,
            sm: 1,
            xs: 1
        }
    },
    isDragable: false,

    //active cell
    hasActiveCell: false,
    displayedCellsNumber: 3,
};

Carousel.propTypes = {
};

export default Carousel;