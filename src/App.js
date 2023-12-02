import React from 'react';
import UseStateHook from './Hooks/UseState/UseStateHook';
import UseContextHook from './Hooks/UseContext/UseContextHook';
import UseImperativeHook from './Hooks/UseImperative/UseImperativeHook';
import UseReducerHook from './Hooks/UseReducer/UseReducerHook';
import UseRefHook from './Hooks/UseRef/UseRefHook';
import UseDebugHook from './Hooks/UseDebugValue/UseDebugHook';
import UseEffectHook from './Hooks/UseEffect/UseEffectHook';
import UseScriptHook from './Hooks/UseScript/UseScriptHook';
import UseCallbackHook from './Hooks/UseCallback/UseCallbackHook';
import UseLayoutHook from './Hooks/UseLayout/UseLayoutHook';
import UseMemoHook from './Hooks/UseMemo/UseMemoHook';

export default function App() {
  return (
    <>
     <UseStateHook></UseStateHook>
     <UseContextHook></UseContextHook>
     <UseImperativeHook></UseImperativeHook>
     <UseReducerHook></UseReducerHook>
     <UseRefHook></UseRefHook>
     <UseDebugHook></UseDebugHook>
     <UseEffectHook></UseEffectHook>
     <UseScriptHook></UseScriptHook>
     <UseCallbackHook></UseCallbackHook>
     <UseLayoutHook></UseLayoutHook>
     <UseMemoHook></UseMemoHook>
    
    </>
  )
}





