
function insertionsort(arr) {
   for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      /*deplace les elements de de arr[0..i-1], qui sont plus grands que key
      d'une position vers la droite pour faire la place à l'element clé(key)
      */
      while (j >= 0 && arr[j] > key) {
         arr[j + 1] = arr[j];
         j = j - 1;
      }
      arr[j + 1] = key;
   }
   return arr;
}
/*
exemple d'utilisation*/
let arr = [12, 11, 13, 5, 6];
console.log("tableau trié: " + insertionsort(arr));