import { showImage } from '../actions/index';

export const fetchImage = () => {
    return (dispatch) => {
        fetch('https://ichef.bbci.co.uk/news/660/cpsprodpb/17541/production/_89835559_harambe_reuters.jpg')
        .then((response) => {
            dispatch(showImage(response))
        })
        .catch((error) => console.log(error));
    }
}