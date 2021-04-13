function fromWhere(carReg){
  switch(carReg){
    case 'CY 189-012':
      return 'Bellville';
      break;
      case 'CJ 189-123':
      return 'Paarl';
      break;
      case 'CA 189-235':
      return 'Cape Town';
      break;
    default:
      return 'Some other place!';
   }
}