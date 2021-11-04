import img from './Spinner-1s-200px.gif';

const Spinner = () => {
    return (
        <img style={{ display: 'block', objectFit: 'contain', margin: "0 auto"}}  src={img} alt="Error"/>
    )
}

export default Spinner;
