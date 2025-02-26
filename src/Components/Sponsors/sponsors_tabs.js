import React, { Component } from "react";
import './sponsors_tabs.css';

class SponsorsTabs extends Component {
    constructor(props) {
        super(props);
        this.onClick1 = this.onClick1.bind(this);
        this.onClick2 = this.onClick2.bind(this);
        this.onClick3 = this.onClick3.bind(this);

        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();

        this.intervalIds = [
            null, null, null
        ];
    }

    intervalIds;

    onClick1() {
        this.setState({
            activeTabId: 0
        });
    }
    onClick2() {
        this.setState({
            activeTabId: 1
        });
    }
    onClick3() {
        this.setState({
            activeTabId: 2
        });
    }

    state = {
        activeTabId: 0
    };

    startScroll() {
        let contRef;
        switch (this.state.activeTabId) {
            case 0: contRef = this.ref1;
                break;
            case 1: contRef = this.ref2;
                break;
            default: contRef = this.ref3;
                break;
        }
        if ((contRef.current != null) && (contRef.current != undefined)) {
            contRef.current.scrollLeft = 0;
            let intvl = this.intervalIds[this.state.activeTabId];
            if (intvl != null) {
                clearInterval(intvl);
            }
            let canScroll = true
            contRef.current.onmouseover = ()=>{canScroll=false}
            contRef.current.onmouseout = ()=>{canScroll=true}

            intvl = setInterval(() => {
                if ((contRef.current != null) && (contRef.current != undefined) && canScroll) {
                    let oldScrollVal = contRef.current.scrollLeft;
                    contRef.current.scrollLeft += 1.25;
                    if (oldScrollVal == contRef.current.scrollLeft) {
                        contRef.current.scrollLeft = 0;
                    }
                }
            }, 5);
            this.intervalIds[this.state.activeTabId] = intvl;
        }
    }

    render() {

        let platinumSpons = this.props.sponsData["Platinum"];
        let platinumSponsHTML = [];
        if (platinumSpons != undefined) {
            platinumSpons.forEach(pSpon => {
                platinumSponsHTML.push(<div key={pSpon.id}>

                    <div className="col m-1" key={pSpon.id}>
                        <div className="cont">
                            <div className="front shadow-lg p-3 mb-5 bg-white rounded">
                                <img
                                    alt={pSpon.name}
                                    className="spons-Image"
                                    src={pSpon.pic_url}
                                />
                            </div>
                            <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                                <div className="inner">
                                    <h6 style={{ fontWeight: "800" }}>
                                        {pSpon.name}
                                    </h6>
                                    <p className="ph-no">{pSpon.contact}</p>
                                    <p>{pSpon.details}</p>
                                    <p>
                                        <a className="web" href={pSpon.website}>
                                            Website
                                    </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
            });
        }

        let goldSpons = this.props.sponsData["Gold"];
        let goldSponsHTML = [];
        if (goldSpons != undefined) {
            goldSpons.forEach(gSpon => {
                goldSponsHTML.push(
                <div key={gSpon.id}>
                    <div className="col m-1" key={gSpon.id}>
                        <div className="cont">
                            <div className="front shadow-lg p-3 mb-5 bg-white rounded">
                                <img
                                    alt={gSpon.name}
                                    className="spons-Image"
                                    src={gSpon.pic_url}
                                />
                            </div>
                            <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                                <div className="inner">
                                    <h6 style={{ fontWeight: "800" }}>
                                        {gSpon.name}
                                    </h6>
                                    <p className="ph-no">{gSpon.contact}</p>
                                    <p>{gSpon.details}</p>
                                    <p>
                                        <a className="web" href={gSpon.website}>
                                            Website
                                    </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
            });
        }

        let partnerSpons = this.props.sponsData["Partner"];
        let partnerSponsHTML = [];
        if (partnerSpons != undefined) {
            partnerSpons.forEach(pSpon => {
                partnerSponsHTML.push(<div key={pSpon.id}>

                    <div className="col m-1" key={pSpon.id}>
                        <div className="cont">
                            <div className="front shadow-lg p-3 mb-5 bg-white rounded">
                                <img
                                    alt={pSpon.name}
                                    className="spons-Image"
                                    src={pSpon.pic_url}
                                />
                            </div>
                            <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                                <div className="inner">
                                    <h6 style={{ fontWeight: "800" }}>
                                        {pSpon.name}
                                    </h6>
                                    <p className="ph-no">{pSpon.contact}</p>
                                    <p>{pSpon.details}</p>
                                    <p>
                                        <a className="web" href={pSpon.website}>
                                            Website
                                    </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
            });
        }

        let classes = [
            "spons-tab1",
            "spons-tab2",
            "spons-tab3"
        ];
        let tabClass = "spons-tab-content_wrapper " + classes[this.state.activeTabId];

        let tabHeaderClasses = [
            "spons-header_wrapper platinum-head_wrapper spons-type-head_wrapper",
            "spons-header_wrapper gold-head_wrapper spons-type-head_wrapper",
            "spons-header_wrapper partner-head_wrapper spons-type-head_wrapper"
        ];

        tabHeaderClasses[this.state.activeTabId] = tabHeaderClasses[this.state.activeTabId] + " active-tab-header";
        this.startScroll();

        return (
            <div className="spons-tabs_wrapper">
                <div className="spons-tab-header_wrapper">
                    <div onClick={this.onClick1} className={tabHeaderClasses[0]}>
                        <div className="spons-header platinum-head">
                            Platinum
                        </div>
                        <div className="spons-header_border platinum-head_border"></div>
                    </div>

                    <div onClick={this.onClick2} className={tabHeaderClasses[1]}>
                        <div className="spons-header gold-head">
                            Gold
                        </div>
                        <div className="spons-header_border gold-head_border"></div>
                    </div>

                    <div onClick={this.onClick3} className={tabHeaderClasses[2]}>
                        <div className="spons-header partner-head">
                            Partner
                        </div>
                        <div className="spons-header_border partner-head_border"></div>
                    </div>

                </div>
                <div className="spons-tab-contents-ctn">
                    <div className="spons-tab-contents-cover">
                        <div className={tabClass}>
                            <div ref={this.ref1} className="spons-tab-content_cover">
                                <div className="spons-tab-content">
                                    {platinumSponsHTML}
                                </div>
                            </div>
                            <div ref={this.ref2} className="spons-tab-content_cover">
                                <div className="spons-tab-content">
                                    {goldSponsHTML}
                                </div>
                            </div>
                            <div ref={this.ref3} className="spons-tab-content_cover">
                                <div className="spons-tab-content">
                                    {partnerSponsHTML}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SponsorsTabs;