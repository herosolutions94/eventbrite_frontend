import React, { useState } from "react"
import style from "@/styles/scss/app.module.scss"

type TermsContentProps = {
	content: string;
};

const TermsContent: React.FC<TermsContentProps> = ({ content }) => {
  
	return (
	  <div className={style.blk}>
		<div dangerouslySetInnerHTML={{ __html: content }} />
	  </div>
	);
  };
  
  export default TermsContent;  