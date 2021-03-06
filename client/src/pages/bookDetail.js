import React from "react";
import Account from "../component/account";
import './syling/bookDetail.css'
import Book from "../asset/big.png"
import AddListIcon from "../asset/buttonList.png"
import ReadBook from "../asset/V.png"


function BookDetail(){
    return(
        <div className="bookDetailScreen">
            <div className="position-relative leftSide">
                <div className="position-fixed">
                <Account/>
                </div>
            </div>
            <div className="rightSide">
                <div className="topPart">
                    
                        <div className="leftTop">
                            <div>
                            <img src={Book} alt="" />
                            </div>
                        </div>
                        <div className="rightTop">
                            <div className="title">
                                <h1>Tess on the Road</h1>
                                <p>Rachel Hartman</p>
                            </div>
                            <div className="detail">
                                <h6>Publication date</h6>
                                <p>April 2020</p>
                            </div>
                            <div className="detail">
                                <h6>Pages</h6>
                                <p>436</p>
                            </div>
                            <div className="detail">
                                <h6 style={{color:"red"}}>ISBN</h6>
                                <p>9781789807554</p>
                            </div>

                        </div>
                    
                </div>
                <div className="bottomPart">
                    <div className="botDetail">
                    <h1>About This Book</h1>
                    <div className="text">
                        <p>In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can???t make a scene at your sister???s wedding and break a relative???s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy. <br/><br/>

                        Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it???s a stroke of luck. This friend is a quigutl???a subspecies of dragon???who gives her both a purpose and protection on the road. But Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she???s tried to forget threaten to expose her to the world in more ways than one.<br/><br/>

                        Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once again in this wholly original fantasy.
                        </p>
                    </div>
                    <div className="button">
                        <button className="addList">Add My List <img src={AddListIcon} alt="" /></button>
                        <button className="readBook">Read Book <img src={ReadBook} alt="" /></button>
                    </div>
                    </div>

                </div>
            </div>

        </div>
        
    )
    }
export default BookDetail;