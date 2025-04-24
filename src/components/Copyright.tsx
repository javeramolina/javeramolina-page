type HeaderProps = {
    copyrightText: string;
  };

const Copyright = ({copyrightText}: HeaderProps)=>{
    return (
        <div className="copyright bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="p-small">Copyright © <a className="no-line" href="#your-link">2025 Jesús Vera. {copyrightText}</a></p>
                    </div> 
                </div> 
            </div> 
        </div>
        );
};

export default Copyright;