import { Icon } from "@iconify/react";

export default function AboutUs() {
    return (
        <div className="parent d-flex flex-column w-100 px-3 my-5 py-5 gap-5" >
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p className="secondarySubHeading p-0 m-0">Three steps. Three minutes</p>
                <p className="component-heading text-center">Everything should be this easy.</p>

            </div>
            <div className=" row d-flex justify-content-center align-items-center">
                <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-5 block">
                    <Icon icon="grommet-icons:chat-option" className="block-icons orange" />
                    <p className="block-heading mt-2">
                        Answer questions
                    </p>
                    <p className="block-description " >Getting insured is as easy as answering a few short question about you home </p>

                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-5 block">


                    <Icon icon="fluent:tooltip-quote-24-regular" className="block-icons green" />

                    <p className="block-heading mt-2">
                        Select a quote
                    </p>
                    <p className="block-description " >Choose your quote and apply online. No hassle, no paperwork, no application fees. </p>

                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-5 block">

                    <Icon icon="game-icons:target-arrows" className="block-icons purple" />
                    <p className="block-heading mt-2">
                        Get registered
                    </p>
                    <p className="block-description " >Congratulations! Youo're complete this steps. And it feels so good</p>

                </div>


            </div>


        </div>
    )
}