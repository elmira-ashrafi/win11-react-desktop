import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToolBar } from "../../../utils/general";

export const Notepad = () => {
  const wnapp = useSelector((state) => state.apps.notepad);

  return (
    <div
      className="notepad floatTab dpShad"
      data-size={wnapp.size}
      data-max={wnapp.max}
      style={{
        ...(wnapp.size == "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id={wnapp.icon + "App"}
    >
      <ToolBar
        app={wnapp.action}
        icon={wnapp.icon}
        size={wnapp.size}
        name="Untitled - Notepad"
      />
      <div className="windowScreen flex flex-col" data-dock="true">
        <div className="flex text-xs py-2 topBar">
          <div className="mx-2">File</div>
          <div className="mx-4">Edit</div>
          <div className="mx-4">View</div>
        </div>
        <div className="restWindow h-full flex-grow">
          <div className="w-full h-full overflow-hidden">
            <textarea className="noteText win11Scroll" id="textpad" defaultValue={`ELMIRA ASHRAFI — Frontend Developer\n${"-".repeat(50)}\nEmail    : elmiraashrafiiii@gmail.com\nGitHub   : https://github.com/elmira-ashrafi\n\nABOUT ME\n--------\nFrontend developer passionate about building polished, interactive web\nexperiences. I enjoy working with React, modern CSS, and thoughtful UI design\nto create products that feel fast, intuitive, and memorable.\n\nThis portfolio is a Windows 11 desktop simulator built with React, Redux,\nVite, and SCSS — demonstrating component architecture, state management,\nwindowing systems, and progressive web app capabilities.\n\nSKILLS\n------\nReact · Redux · JavaScript · HTML · CSS · SCSS · Vite · Tailwind CSS\nResponsive Design · PWA · i18n · Git · REST APIs · UI Engineering\n\nFEATURED PROJECT\n----------------\nWin11 React Desktop — Interactive Windows 11 portfolio experience\nhttps://github.com/elmira-ashrafi/win11-react-desktop\n`} />
          </div>
        </div>
      </div>
    </div>
  );
};
