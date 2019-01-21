var fs = require('fs');
var cmd = require('node-cmd');

/**
 * Install this first: https://gist.github.com/rain1024/98dd5e2c6c8c28f9ea9d
 */
const name = "Thando James";

var data = 
`
%\\title{Example letter using the newlfm LaTeX package}
%
% See http://texblog.org/2013/11/11/latexs-alternative-letter-class-newlfm/
% and http://www.ctan.org/tex-archive/macros/latex/contrib/newlfm
% for more information.
%
\\documentclass[12pt,stdletter,orderfromtodate,sigleft]{newlfm}
\\usepackage{blindtext, xfrac}
 
\\newlfmP{dateskipbefore=50pt}
\\newlfmP{sigsize=50pt}
\\newlfmP{sigskipbefore=50pt}
 
\\newlfmP{Headlinewd=0pt,Footlinewd=0pt}
 
\\namefrom{Sherlock Holmes}
\\addrfrom{%
    221B Baker Street\\
    London, UK
}
 
\\addrto{%
    Basil of Baker Street\\
    221$\sfrac{1}{2}$ Baker Street\\
    London, UK
}
 
\\dateset{January 6, 1914}
 
\\greetto{${name},}
 
\\closeline{Sincerely,}
 
\\begin{document}
\\begin{newlfm}
\\blindtext
\\end{newlfm}
\\end{document}`;

// 
fs.writeFile('temp.tex', data, function(err, data){
    if (err) console.log(err);
    cmd.run('pdflatex -interaction=nonstopmode temp.tex');
});