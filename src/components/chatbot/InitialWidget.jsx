import ImageWidget from './ImageWidget';
import WallWidget from './WallWidget';

const InitialWidget = (props) => {
    return (
        <>
            <WallWidget {...props} />
            <ImageWidget {...props} />
        </>
    )
}

export default InitialWidget;

