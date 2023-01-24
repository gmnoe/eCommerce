import { Col } from 'reactstrap';

const Loading = () => {
    return (
        <div id='loadingwrap'>
            <div className='loading'>
                <i className='fa fa-spinner fa-pulse fa-3x fa-fw' />
                <p>Loading...</p>
            </div>
        </div>
    );
};

export default Loading;