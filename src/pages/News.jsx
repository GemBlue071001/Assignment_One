import { newLists } from "../constants/news"
const News = () => {

    const news = newLists

    return (
        <div className="container mt-4">
            <h1>News Category</h1>
            <div className="row">
                {
                   news.map((newsItem) => {
                        return (
                            <div key={newsItem.id} className="col-md-6 col-lg-4 mb-4">
                                <div className="card h-100">
                                    <img
                                        src={newsItem.images}
                                        className="card-img-top"
                                        alt={newsItem.title}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{newsItem.title}</h5>
                                        <p className="card-text flex-grow-1">{newsItem.description}</p>
                                        <button className="btn btn-primary mt-auto">Read More</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default News