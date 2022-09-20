import React, {useState} from 'react';
import "./MapSubView.css";
import {Col, Container, Row} from "react-bootstrap";
import Threads from "../../../resources/Misc/Hilos.png";

// Misc
import Huella from "../../../resources/Misc/FingerPrint_Demian.png";
import Blueprint from "../../../resources/Misc/Mic_Blueprint.png";

// Publicidades
import Uala from "../../../resources/FotosPublicidades/uala_pin.png";
import MenuDelDia from "../../../resources/FotosPublicidades/menuDelDia_pin.png";
import Sprite from "../../../resources/FotosPublicidades/Sprite_pin.png";
import Mccain from "../../../resources/FotosPublicidades/mccain_pin.png";
import Mapa from "../../../resources/Misc/Mapa_BA.png";
import Latinafy from "../../../resources/FotosPublicidades/latinafy_pin.png";
import CartoonNetwork from "../../../resources/FotosPublicidades/CN.png";
import Danonino from "../../../resources/FotosPublicidades/danonino2.png";
import Milka from "../../../resources/FotosPublicidades/milka.png";
import Fernet from "../../../resources/FotosPublicidades/branca_pin.png";
import MilkaNote from "../../../resources/FotosPublicidades/etiquetas_Milka.png";
import FernetNote from "../../../resources/FotosPublicidades/etiquetas_Branca.png";

// Notas filmografía
import TvSeries from "../../../resources/NotasFilmografía/Filmografia_1_tvymovies_pin.png"
// import AnimatedSeries from "../../../resources/NotasFilmografía/Filmografia_2_seriesanim_pin-min.png";
// import AnimatedSeries from "../../../resources/NotasFilmografía/Filmografia_2_seriesanim_pin_baja.png";
import AnimatedSeries from "../../../resources/NotasFilmografía/Filmografia_2_seriesanim_pin.png";

// Sticky notes
import FeaturedCommercial from "../../../resources/StickyNotes/stickyNote_Featured_Commercial.png";
import VoiceActorNote from "../../../resources/StickyNotes/stickyNote_VOICE_ACTOR.png";
import ArtistNote from "../../../resources/StickyNotes/stickyNote_ARTIST.png";
import ActorNote from "../../../resources/StickyNotes/stickyNote_ACTOR.png";
import ContentCreatorNote from "../../../resources/StickyNotes/stickyNote_CONTENT_CREATOR.png";
import SoundProductionNote from "../../../resources/StickyNotes/stickyNote_SOUND_PRODUCTION.png";

// Fotos Personajes
import Kiko from "../../../resources/FotosPersonajes/UNDERDOGS-KIKOphoto_pin.png";
import Theo from "../../../resources/FotosPersonajes/Theophoto_pin.png";
import EvanTreborn from "../../../resources/FotosPersonajes/ElEfectoMariposaphoto_pin.png";
import Zamba from "../../../resources/FotosPersonajes/zambaphoto_pin.png";
import ZambaNote from "../../../resources/FotosPersonajes/etiquetas_Zamba.png";
import EvanNote from "../../../resources/FotosPersonajes/etiquetas_Evan.png";
import TheoNote from "../../../resources/FotosPersonajes/etiquetas_Theo.png";
import KikoNote from "../../../resources/FotosPersonajes/etiquetas_Kiko.png";
import VideoModal from "../../../component/VideoModal/VideoModal";


export default function MapSubView(){
    const [showModal, setShowModal] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");
    const [modalTitle, setmMdalTitle] = useState("");

    const clickOnImage = (videoSrcFromClick, title) => {
        setShowModal(true);
        setVideoSrc(videoSrcFromClick)
        setmMdalTitle(title)
    }


    return (
        <section className="map-container">
            <div>
                <img src={Threads} id="threads-mapa" className="black-shadow" alt={"threads"}/>
            </div>
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <div id="fingerprint-damian-container" className="black-shadow">
                                <img src={Huella} id="fingerprint-damian" alt="huella-dactilar"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="relative-container">
                                <div id="map-image-container">
                                    <img src={Mapa} id="mapaBa-misc" alt="mapa"/>
                                </div>
                                <Row>
                                    <div id="latinafy-container" className="black-shadow">
                                        <img src={Latinafy} id="latinafy-publicidades" alt="latinafy"/>
                                    </div>
                                </Row>
                                <Row>
                                    <div id="animated-series-note-container" className="black-shadow">
                                        <img src={AnimatedSeries} id="animated-series-note" alt="latinafy"/>
                                    </div>
                                </Row>
                            </div>
                        </Row>
                        <Row>
                            <div id="milka-publicidad-container" className="black-shadow">
                                <img src={Milka} id="milka-publicidad" className="clickable" alt="latinafy"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/zUmeVzfR1J0", "Milka")}/>
                            </div>
                        </Row>
                        <Row>
                            <div className="publi-note-container">
                                <img src={MilkaNote} className="publi-note" alt="milka-note"/>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="relative-container">
                                <div id="cartoon-network-container" className="black-shadow">
                                    <img src={CartoonNetwork} id="cartoon-network-publicidad" className="clickable" alt="cartoonetwork"
                                         onClick={() => clickOnImage("https://www.youtube.com/embed/-T9pxXteUmQ", "Cartoon Network")}/>
                                </div>
                                <div id="voice-actor-container" className="black-shadow">
                                    <img src={VoiceActorNote} id="voice-actor-note" alt="voice-actor-note"/>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div id="danonino-container" className="black-shadow">
                                <img src={Danonino} id="danonino-publicidad" className="clickable" alt="danonino"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/dI4v2IAPSnw", "Danonino")}/>
                            </div>
                        </Row>
                        <Row>
                            <div id="content-creator-container" className="black-shadow">
                                <img src={ContentCreatorNote} id="content-creator" alt="content-creator"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="actor-container" className="black-shadow">
                                <img src={ActorNote} id="actor-note" alt="content-creator"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="sound-container" className="black-shadow">
                                <img src={SoundProductionNote} id="sound-note" alt="content-creator"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="fernet-container" className="black-shadow">
                                <img src={Fernet} id="fernet-publicidad" className="clickable" alt="fernet"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/lu8gXodHMWs", "Fernet Branca")}/>
                            </div>
                        </Row>
                        <Row>
                            <div className="publi-note-container" id="fernet-ntoe">
                                <img src={FernetNote} className="publi-note" alt="fernet-note"/>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div id="blueprint-note-container">
                                <div id="blueprint-damian-container" className="black-shadow">
                                    <img src={Blueprint} id="blueprint-damian" alt="blueprint"/>
                                </div>
                                <div id="featured-commercial-note-container" className="black-shadow">
                                    <img src={FeaturedCommercial} id="featured-commercial-note" alt="featured-commercial-note"/>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div id="kiko-container" className="black-shadow clickable">
                                <img src={Kiko} className="personajes-img" alt="kiko-img"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/MyRrRVp0ObU", "Kiko")}/>
                            </div>
                            <div id="kiko-note-container" className="black-shadow">
                                <img src={KikoNote} className="personajes-img" alt="kiko-note"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="theo-container" className="black-shadow">
                                <img src={Theo} className="personajes-img" alt="theo-img"/>
                            </div>
                            <div id="theo-note-container" className="black-shadow">
                                <img src={TheoNote} className="personajes-img" alt="theo-note"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="evan-container" className="black-shadow">
                                <img src={EvanTreborn} className="personajes-img" alt="evan-img"/>
                            </div>
                            <div id="evan-note-container" className="black-shadow">
                                <img src={EvanNote} className="personajes-img" alt="evan-note"/>
                            </div>
                        </Row>
                        <Row>
                            <div id="zamba-container" className="black-shadow clickable zoom">
                                <img src={Zamba} className="personajes-img" alt="zamba-img"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/nQhNhXSUmDQ", "Zamba")}/>
                            </div>
                            <div id="zamba-note-container" className="black-shadow">
                                <img src={ZambaNote} className="personajes-img" alt="zamba-note"/>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="uala-publicidad" >
                                <img className="fotos-publicidades-mapa clickable"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/dJyRl1bq9eg", "Ualá")}
                                     src={Uala} alt="uala"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="mccain-publicidad">
                                <img className="fotos-publicidades-mapa clickable"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/ycuR_xsmGa0", "Mccain")}
                                     src={Mccain} alt="menudeldia"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="sprite-publicidad">
                                <img className="fotos-publicidades-mapa clickable"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/sAeEuGHyduc", "Sprite")}
                                     src={Sprite} alt="sprite"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="fotos-publicidades-mapa-container" id="menudeldia-publicidad">
                                <img className="fotos-publicidades-mapa clickable"
                                     onClick={() => clickOnImage("https://www.youtube.com/embed/5aHWDN2V8L4", "Menu del Día")}
                                     src={MenuDelDia} alt="mccain"/>
                            </div>
                        </Row>
                        <Row>
                            <div className="relative-container">
                                <div className="fotos-publicidades-mapa-container" id="tvSeries-notas">
                                    <img className="fotos-publicidades-mapa" id="tvSeries-notas-img" src={TvSeries} alt="tvseries"/>
                                </div>
                                <div id="artistic-note-continer" className="black-shadow">
                                    <img src={ArtistNote} id="artistic-note" alt="artistic-note"/>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <VideoModal videoUrl={videoSrc} show={showModal} setShow={setShowModal} title={modalTitle}/>
        </section>
    )
}