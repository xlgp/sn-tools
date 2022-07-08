export default () => {

    const point = {
        x: 0, y: 0
    };

    const translate = reactive({
        x: 0, y: 0
    })

    let moving = false;
    const handleMousedown = (e: MouseEvent) => {
        moving = true;
        point.x = e.clientX;
        point.y = e.clientY;
        e.preventDefault();
    };

    const handleMousemove = (e: MouseEvent) => {
        if (moving) {
            translate.x = e.clientX - point.x;
            translate.y = e.clientY - point.y;
        }
        return false;
    };

    const handleMouseup = (e: MouseEvent) => {
        moving = false;
    };

    const init = () => {
        translate.x = 0;
        translate.y = 0;
    }

    return {
        handleMousedown, handleMousemove, handleMouseup, translate, init
    }
}