import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import AOS from "aos";
import Dessing from "../Dessing/Dessin";
import { FeaturesSection } from "../Featuresection/FeaturesSection";
export default class Home extends Component {
    componentDidMount() {
        AOS.init({
            duration: 500,
            offset: 200,
            easing: "ease-in-out",
            once: true,
            delay: 100
        });
    };

    render = () => {
       
        
        const settings = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            delay: 2555 ^ 2
        };

        return (
            <>
                <div className="banner wrapper small-agency-home-header-bg " id="top">
                    

                    <div className="container">
                    <div className="banner-content">
                            <h1>IT DEV Solution propulse 
                                <br /> les entreprises  de nouveux soumets</h1>
                            <p className="section-subheading1">ITDS et une Etreprise de Services Numérique 
                                <br /> , filiale a 100% du Fonds National d'Investissement.</p>
                            <Link to="/portfolio" className="custom-btn btn-big grad-style-ef page-scroll">Découvrir</Link>
                        </div>
                    </div>
                  
                </div>
                <div >
                    </div>
                    <div className="body-bg-style-1 ">
                <div className="page-wrapper">
                    <svg className="bg-shape inner-page-shape-banner-right reveal-from-right move-image" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" width="779px" height="759px">
                        <defs>
                            <linearGradient id="PSgrad_01" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path fillRule="evenodd" fill="url(#PSgrad_01)"
                            d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z" />
                    </svg>

                    <svg className="bg-shape inner-page-shape-banner-left reveal-from-left move-image" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" width="779px" height="759px">
                        <defs>
                            <linearGradient id="PSgrad_02" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path fillRule="evenodd" fill="url(#PSgrad_02)"
                            d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z" />
                    </svg>

                    <div className="inner-page-banner light-bg ">
                        <div className="container text-center">
                            <h1>Nos solution</h1>
                            <p>« IT Dev Solution Spa » propose des solutions sur mesure adaptées a votre secteur d'activité et a la phase de croissance de votre entreprise.</p>

                      
                        </div>
                    
                    </div>
                    

                

                    
                </div>
            </div>
                <section className="services z-3">

                    <div className="container">

             <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-6 m-b-30" data-aos="fade-up">
                                <Link to="/Conseil/et/Intégration" target="_blank" rel="noreferrer" className="service-box text-center content-block">
                                    <div className="box-bg grad-style-cd"></div>
                                    <span className="icon-container grad-style-ab-light">
                                        <i className="ml-des-62-Precision-compasses-graphics-design-tool-interface txt-grad-cd"><img src="./4.svg" alt="dsqfr"/></i>
                                    </span>
                                    <h5 className="text-center">Conseil & Intégration</h5>
                                    <p className="color-p-desc">Audit et diagnostic des sytémes d'information , Définition de stratégies IT alignées sur les objictifs métiers , Assistance & maitrise d'ouvrage</p>
                                </Link>
                            </div>

                            <div className="col-lg-6 col-md-6 m-b-30" data-aos="fade-up">
                                <Link to="/service/Développement/sur/mésure" target="_blank" rel="noreferrer" className="service-box text-center content-block">
                                    <div className="box-bg grad-style-ab"></div>
                                    <span className="icon-container grad-style-ab-light">
                                        <i className="ml-des-57-upload-download-sync-application-device-mobile-computer txt-grad-ab"><img src="./2.svg" alt="dsqfr"/></i>
                                    </span>
                                    <h5 className="text-center">Développement sur-mesure </h5>
                                    <p className="color-p-desc">Conception d'applications métier selon les besoins spécifiques , Dévelelopement web\mobile , Technologies innovantes : IA, Big Data, Business INtelegence </p>
                                </Link>
                            </div>

                            

                            <div className="col-lg-6 col-md-6 m-b-30" data-aos="fade-up">
                                <Link to="/service/pay/per/click" target="_blank" rel="noreferrer" className="service-box text-center content-block">
                                    <div className="box-bg grad-style-ab"></div>
                                    <span className="icon-container grad-style-ab-light">
                                        <i className="ml-symtwo-34-cursor-click-browser-website-arrow-computer txt-grad-ab"><img src="./1.svg" alt="dsqfr"/></i>
                                    </span>
                                    <h5 className="text-center">Systémes et infrastructures</h5>
                                    <p className="color-p-desc">Gestion des infrastructures IT , Supervision des applications , Support utilisateurs et assistance technique </p>
                                </Link>
                            </div>

                            <div className="col-lg-6 col-md-6 m-b-30" data-aos="fade-up">
                                <Link to="/service/social/media/marketing" target="_blank" rel="noreferrer" className="service-box text-center content-block">
                                    <div className="box-bg grad-style-ef"></div>
                                    <span className="icon-container grad-style-ab-light">
                                        <i className="ml-dat-63-database-computer-network-internet-globe-server txt-grad-ef"><img src="./3.svg" alt="dsqfr"/></i>
                                    </span>
                                    <h5 className="text-center">Qualification logicielle</h5>
                                    <p className="color-p-desc">Tests et qualification d'applications ou de progiciels issus de grands éditeurs </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-us">
                    <svg className="bg-shape shape-about reveal-from-right" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" width="779px" height="759px">
                        <defs>
                            <linearGradient id="PSgrad_02" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                <stop offset="0%" stopColor="rgb(237,247,255)" stopOpacity="1" />
                                <stop offset="100%" stopColor="rgb(237,247,255)" stopOpacity="0" />
                            </linearGradient>

                        </defs>
                        <path fillRule="evenodd" fill="url(#PSgrad_02)" d="M111.652,578.171 L218.141,672.919 C355.910,795.500 568.207,784.561 692.320,648.484 C816.434,512.409 805.362,302.726 667.592,180.144 L561.104,85.396 C423.334,-37.184 211.037,-26.245 86.924,109.832 C-37.189,245.908 -26.118,455.590 111.652,578.171 Z"
                        />
                    </svg>
                    <video className="video-play-bg " autoPlay loop muted >
  <source className="" src="./IT.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
              
 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ml-auto">
                     
                                <h5>QUI sommes_nous ?</h5>
                                <p>ITDS est une entreprise de service numériques , filiale a 100% du Fonds National d'Investissement (FNI), Notre mission est d'accompagner les entreprises et organismes algérie,s dans leur transformation digital grace a des solutions innovantes , sécurisées et conformes  </p>
                                <p>Notre expertise s'étend sur l'ensemble de la chaîne de valeur des systèmes d'information : conseil, intégration de solutions, développement spécifique, BPM, hébergement sécurisé dans le cloud en Algérie, infogérance, cybersécurité, conformité réglementaire, etc..</p>
                               
                            </div>
                        </div>
                    </div>
                </section>
             
                <FeaturesSection title="Stratégie et perspectives" slice={3} item={false} />

                 

                <section className="case-study small-agency-case-study">
                  
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <Slider className="case-study-slider" {...settings}>
                                    <div className="item">
                                        <h2>La passion</h2>
                                        <p>La passion et L'Amour est dans le code aussi ! les relations et l'ambiance restent toujours parmi nos règles : s'aimer les uns les autres , garder la tête haute , se serrer les coudes et se pardonner si jamais nous sommes nervés les uns des autres ! c'est le principe de la famille ! la famille IT DEV Solution! </p>
                                       
                                    </div>

                                    <div className="item">
                                        <h2>La qualité</h2>
                                        <p>Nos solutions comprennent évidemment la mise en oeuvre de tests unitaires et fonctionnels afin d'assurer la pérennité et un coût de maintenance faible pour chacun de nos projets. la qualité est toujours l'objectif ultime à atteindre ! venez donc découvrir le travail de qualité ! oui oui c'est garanti !</p>
                                       
                                    </div>

                                    <div className="item">
                                        <h2>Penser client</h2>
                                        <p> Penser comme un client , se mettre à votre place pour l'auto critique et la prévention de vos avis avant le test de votre produit. Cela nous permet d'aborder notre métier en nous mettant en permanence à votre place et rester ainsi connecté à vos réalités, vos attentes et votre business. </p>
                                       
                                    </div>
                                </Slider>
                                <div className="btn-container">
                                            <Link to="/case/studies/details" className="custom-btn btn-big grad-style-ab">Découvrir nos métiers !</Link>
                                        </div>
                            </div>
                            <div className="img-container col-lg-6">
                                <img src="../ITDS.jpg" alt="case-study" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    
                </section>
                <div className="inner-page-banner light-bg">
                        <div className="container text-center">
                            <h1>Nos partenaires</h1>
                            <p>Nos partenaires sont au cœur de notre réussite. Chez IT DEV Solution, nous croyons en la puissance des collaborations et des synergies pour créer des opportunités et relever les défis du marché.</p>

                      
                        </div>
                        <div className=" container-fluid pt-4 light-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 dark-bg py-5 px-5">
              <div>
                <h1 className="">Devenez notre partenaire privilégié et rejoignez notre réseau d'entreprises dynamiques et innovantes. </h1>
              
              </div>
              <div className="mt-4 ">
                <Link
                  to="#services"
                  type="button"
                  className="custom-btn btn-big dark-bg grad-style-ab"
                >
                  Rejoignez-nous
                </Link>
               
              </div>
              
            </div>
            <div className=" bg-bluelight  col-md-5 col-lg-6 overflow-hidden">
              <img
                className="img-fit-cover b-6"
                src="./6.png"
                alt="heroSectionImg"
              />
            </div>
          </div>
        </div>
      </div>
                    
                    </div>
 
              
    
               
      <div className="container-fluid p-0 overflow-hidden bg-brand-primay dark-bg align-items-center">
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            className="img-fit-cover b-6"
            src="./image-06.jpg"
            alt=""
            srcSet=""
          />
        </div>
        <div className="col-12 col-md-6 dark-bg py-5 px-5">
          <h1 className="w-100">
            Energy of a start-up combined with 30 years of experience.
          </h1>
          <Link to="/case/studies"
            className="custom-btn btn-big grad-style-ab"
          >
            Voir les offres d'emploi
          </Link>
        </div>
      </div>
    </div>
            </>
        )
    }
}
