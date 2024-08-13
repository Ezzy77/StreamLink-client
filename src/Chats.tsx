export default function Chats() {
    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="hero-content flex-col lg:flex-row" >
                <div className="card bg-base-100  shrink-0 shadow-2xl m-2 min-w-60 min-h-60" data-theme="dim">
                    <h2 className="text-2xl font-bold">messages</h2>
                    <ul className="m-5 ">
                        <li className="border-b mb-2 flex justify-between">
                            <div className="avatar online flex-row">
                                <div className="w-10 rounded-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold">John Doe</p>
                                <p className="text-sm">Hey, how are you?</p>
                            </div>
                        </li>
                        <li className="border-b mb-2">
                            <div className="avatar online">
                                <div className="w-10 rounded-full">
                                <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                                </div>
                            </div>
                        </li>
                        <li className="border-b mb-2">
                            <div className="avatar online">
                                <div className="w-10 rounded-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card bg-base-100 w-full max-w-4xl shrink-0 shadow-2xl m-2 opacity-75" data-theme="autumn" >
                    <div className="video-container">
                        <div className="flex justify-between">
                            <div className="card bg-black m-2 min-w-60 min-h-60 opacity-75">
                            </div>
                            <div className="flex">
                                 <span className="m-2">
                                       <img
                                           src="../public/camera.svg"
                                           alt="camera"
                                       />
                                    </span>

                                <span className="m-2">
                                       <img
                                           src="../public/message.svg"
                                           alt="message"
                                       />
                                    </span>
                                <span className="m-2">
                                       <img
                                           src="../public/info.svg"
                                           alt="info"
                                       />
                                    </span>
                                <span className="m-2">
                                       <img
                                           src="../public/fullscreen.svg"
                                           alt="fullscreen"
                                       />
                                </span>

                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="card bg-base-100">
                                <div className="card-body">
                                    <div className="video-container">
                                        <video id="localVideo" autoPlay muted></video>
                                        <video id="remoteVideo" autoPlay></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100">
                                <div className="card-body">
                                    <div className="flex justify-center">
                                        <button className="btn btn-circle m-2">
                                            <img
                                                src="../public/mic.svg"

                                                alt="mic"/>
                                        </button>
                                        <button className="btn btn-circle bg-red-600 m-2">
                                            <img
                                                src="../public/call.svg"

                                                alt="call"/>
                                        </button>
                                        <button className="btn btn-circle m-2">
                                            <img
                                                src="../public/videocam.svg"

                                                alt="videocam"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}