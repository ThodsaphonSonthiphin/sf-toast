import React, {useRef} from 'react';
import './App.css';
import {ToastComponent} from "@syncfusion/ej2-react-notifications";
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWGBCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWH9fdHZXR2ReUUdwV0Q=');

function App() {
  const toastInstance = useRef<ToastComponent|null>(null);

  function toastCreated() {
    if (toastInstance.current) {
      toastInstance.current.show();
    }

  }

  return (
      <ToastComponent
          ref={(toast: ToastComponent) => toastInstance.current = toast}
          title="Sample Toast Title"
          content="Sample Toast Content"
          created={toastCreated}
      />
  );
};

export default App;
