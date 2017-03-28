import React from 'react';
import './ContentMockup.scss';
import cms from '../../cms';

import RaisedButton from 'material-ui/RaisedButton';

export default () => {
    return cms(__filename)(
        <div className="ContentMockup">
            <div className="row title">
                <div className="col-sm-3 col-sm-offset-1">
                    <span className="SectionTitle">What is Neufund</span>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-1 col-sm-offset-1">
                    <div className="circle"></div>
                </div>
                <div className="col-sm-9">
                    <h4>Hello header</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo modo autem philosophus loquitur? An me, inquam, nisi te audire vellem, censes haec dicturum fuisse? Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D. Rapior illuc, revocat autem Antiochus, nec est praeterea, quem audiamus. Quae enim adhuc protulisti, popularia sunt, ego autem a te elegantiora desidero. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Non est enim vitium in oratione solum, sed etiam in moribus. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum.
                    Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Quod non faceret, si in voluptate summum bonum poneret. Quid, si etiam iucunda memoria est praeteritorum malorum? Res tota, Torquate, non doctorum hominum, velle post mortem epulis celebrari memoriam sui nominis. Restatis igitur vos; Non ego tecum iam ita iocabor, ut isdem his de rebus, cum L.
                </div>
            </div>
            <div className="row title">
                <div className="col-sm-3 col-sm-offset-1">
                    <span className="SectionTitle">What is NEUMARK</span>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-1 col-sm-offset-1">
                    <div className="circle"></div>
                </div>
                <div className="col-sm-9">
                    <h4>Hello header</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo modo autem philosophus loquitur? An me, inquam, nisi te audire vellem, censes haec dicturum fuisse? Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D. Rapior illuc, revocat autem Antiochus, nec est praeterea, quem audiamus. Quae enim adhuc protulisti, popularia sunt, ego autem a te elegantiora desidero. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Non est enim vitium in oratione solum, sed etiam in moribus. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum.
                    Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Quod non faceret, si in voluptate summum bonum poneret. Quid, si etiam iucunda memoria est praeteritorum malorum? Res tota, Torquate, non doctorum hominum, velle post mortem epulis celebrari memoriam sui nominis. Restatis igitur vos; Non ego tecum iam ita iocabor, ut isdem his de rebus, cum L.
                </div>
            </div>

            <div className="GreyArea">
                <div className="row titlefirst">
                    <div className="col-sm-3 col-sm-offset-1">
                        <span className="whyToInvest">WHY TO INVEST IN NEUFUND</span>
                    </div>
                </div>
                <div className="row titleinvestments">
                    <div className="col-sm-3 col-sm-offset-1">
                        <span className="SectionTitle">Funds investments</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1 contentInvest">
                        <div className="circleCointeiner">
                            <div className="investmentCircle"></div>
                            <span>Invest title</span>
                        </div>
                        <div className="circleCointeiner">
                            <div className="investmentCircle"></div>
                            <span>Invest title2 </span>
                        </div>
                        <div className="circleCointeiner">
                            <div className="investmentCircle"></div>
                            <span>Invest title3</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1" style={{"text-align": "center"}}>
                        <RaisedButton className="getFundedButton"
                                      label="Get Founded"
                                      backgroundColor="#12719A"
                                      labelColor="#fff"/>

                    </div>
                </div>
            </div>

            <div className="row title">
                <div className="col-sm-3 col-sm-offset-1">
                    <span className="SectionTitle">How to become and investor</span>
                </div>
            </div>

            <div className="row title" style={{"padding-bottom": "3rem"}}>
                <div className="col-sm-3 col-sm-offset-1">
                    <span className="SectionTitle">FAQ</span>
                </div>
            </div>
        </div>
    )
};