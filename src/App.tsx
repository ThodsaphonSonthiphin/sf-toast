import React, { useRef } from 'react';
import './App.css';
import { ToastComponent } from "@syncfusion/ej2-react-notifications";
import { registerLicense } from '@syncfusion/ej2-base';
import { ToastPositionModel } from "@syncfusion/ej2-notifications/src/toast/toast-model";

registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWGBCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWH9fdHZXR2ReUUdwV0Q=');

function App() {
  const toastInstance = useRef<ToastComponent | null>(null);

  // Toast created callback
  function toastCreated() {
    if (toastInstance.current) {
      toastInstance.current.show();
    }
  }

  // Toast position model
  const position: ToastPositionModel = { Y: "Top", X: "Center" };

  return (
      <>
        <div id="test-1" style={{ width: "500px", height: "300px", backgroundColor: "red" }}></div>
        <div id="test-2" style={{ width: "500px", height: "300px", backgroundColor: "blue" }}>
          {/* The toast will be anchored to this element */}
          <div id="toast-target" style={{ width: "500px", height: "150px", backgroundColor: "black" }}></div>
        </div>
        <ToastComponent
            ref={(toast: ToastComponent) => toastInstance.current = toast}
            title="Sample Toast Title"
            content="Sample Toast Content"
            created={toastCreated}
            icon="custom-icon"
            target="#toast-target"  // Use CSS selector to target the element by ID
            position={position}
        />
        <button onClick={() => toastInstance.current?.show()}>Show Toast</button>
      </>
  );
}

export default App;
