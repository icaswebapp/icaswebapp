import React from 'react';

function NotesItem({name , url , position}) {

    const handleClick = (event) => {
        console.log('URL NAME' , name);
        console.log('DOWNLOAD URL',url);
        console.log('POSITION URL',position);
        openInNewTab(url);
    }

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
      }

    return (
                <article className="mw8 center br2 ba b--black bg-grey">
                    <div className="dt-ns dt--fixed-ns w-100">
                    <div className="pa3 pa4-ns dtc-ns v-mid">
                        <div>
                        <h2 className="fw9 black mt0 mb3">{name}</h2>
                        </div>
                    </div>
                    <div className="pa3 pa4-ns dtc-ns v-mid">
                        <p className="no-underline f6 tc db w-100 pv3 bg-animate bg-black hover-bg-dark-blue white br2 pointer grow" onClick={handleClick}>DOWNLOAD</p>
                    </div>
                    </div>
                </article>
                )
}


export default NotesItem;

