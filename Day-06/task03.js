export function countGs(str){ 
    let compteur = 0;
    for( let i=0; i < str.length ; i++) {
        if (str[i]  =='G') {
            compteur +=1;
            }
        }
    return compteur
   
}