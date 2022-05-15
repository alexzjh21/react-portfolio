import React from 'react';

function Modal({onClose, currentPhoto}) {
    const {name, category, index} = currentPhoto;
    const links = {
        works: {
            web: {
                0: "https://guitar-shop-group-project.herokuapp.com/",
                1: "https://cesarsiguencia.github.io/dine-n-wine/",
                2: "https://alexzjh21.github.io/food-festival/"
            },
            repo: {
                0: "https://github.com/hannahhan153/Guitar-Shop",
                1: "https://github.com/cesarsiguencia/dine-n-wine",
                2: "https://github.com/alexzjh21/food-festival"
            }
        },
        creative: {
            profile: {
                0: "https://www.douyin.com/user/MS4wLjABAAAARQbNaXlYSMsZm4vkhOGp9Rekz3jUVG-bOl-m3GNZDc8_-A4fGn0_7eP3Mt2s7H9B",
                1: "https://www.douyin.com/user/MS4wLjABAAAAB-mvhig-BPyAZHwq9ksv_3xgXp9OramicPwhJPqREVHXA2jxRZr5Q0Hu6kGWMo_Q",
                2: "https://www.douyin.com/user/MS4wLjABAAAA9imkS28Nv160fLLf4Djv6gwY9mMsXnScgT-FbAVAufg",
                3: "https://www.douyin.com/user/MS4wLjABAAAAzu9-goGk118jSJbt32HwxuVYcmq46twULJlS0hsOVrY"
            },
            vid1: {
                0: "https://www.douyin.com/video/7092261772786224396",
                1: "https://www.douyin.com/video/6998082894648364322",
                2: "https://www.douyin.com/video/7094459084736417057",
                3: "https://www.douyin.com/video/6990558529094487304"
            },
            vid2: {
                0: "https://www.douyin.com/video/7073318937261346087",
                1: "https://www.douyin.com/video/6992422052376382733",
                2: "https://www.douyin.com/video/7087742432695143691",
                3: "https://www.douyin.com/video/6982930533709810981"
            }
        },
    };
  
    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
            <h3 className="modalTitle">{name}</h3>
            {category === "works" &&
            <React.Fragment>
                <img className="img-modal mx-m" src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <img className="img-modal mx-m" src={require(`../../assets/large/${category}/${index + 10}.jpg`)} alt="current category" />
                <p className="mx-b">External Links:</p>
            </React.Fragment>
            }
            {category === "creative" &&
            <React.Fragment>
                <img className="img-modal mx-m" src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <img className="img-modal mx-m" src={require(`../../assets/large/${category}/${index + 10}.jpg`)} alt="current category" />
                <p className="mx-b">External Links:</p>
            </React.Fragment>
            }
            {category === "documents" &&
                <img className="img-docs" src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
            }
            {category === "contact" &&
                <img className="img-contact" src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
            }

                {category === "works" &&
                    <React.Fragment>
                        <button type="button" className="mx-b" onClick={ () => window.open(links[category].web[index],'_blank')}>Visit Website</button>
                        <button type="button" className="mx-b" onClick={ () => window.open(links[category].repo[index],'_blank')}>Visit Repository</button>
                    </React.Fragment> 
                }
                {category === "creative" &&
                    <React.Fragment> 
                        <button type="button" className="mx-b" onClick={ () => window.open(links[category].profile[index],'_blank')}>Visit User Profile</button>
                        <button type="button" className="mx-b" onClick={ () => window.open(links[category].vid1[index],'_blank')}> Video 1</button>
                        <button type="button" className="mx-b" onClick={ () => window.open(links[category].vid2[index],'_blank')}>Video 2</button>
                    </React.Fragment>
                }
                {category === "documents" &&
                    <React.Fragment>
                        <a href={require(`../../assets/docs/${name}.pdf`)} download="alexchangresume">
                            <button type="button" className="mx-b">Download {name}</button>
                        </a>
                    </React.Fragment>  
                }
                {category === "contact" &&
                    <React.Fragment>
                        <a href="mailto:kc4562@nyu.edu">
                            <button type="button" className="mx-b">Email Me!</button>
                        </a>
                    </React.Fragment>
                }
                <button onClick={onClose} type="button" className="mx-b">
                    Close this modal
                </button>                               
            </div>
        </div>
    );
  }
  
export default Modal;