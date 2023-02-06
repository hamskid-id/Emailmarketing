import EmailEditor from 'react-email-editor';

export const 
    EditorInstance = ({
    onReady,
    onLoad,
    emailEditorRef
}) => {
  

  return (
    <div className='editorContainer'>
      <EmailEditor 
        ref={emailEditorRef} 
        onLoad={onLoad} 
        onReady={onReady} 
    />
    </div>
  );
};