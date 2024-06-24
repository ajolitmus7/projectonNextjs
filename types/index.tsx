interface ticketData {
  Sno: number;
  data: string;
  referenceCode: string;
  status: string;
  title: string;
  category: string;
  eta: string;
  expectedEta: string;
  description: string;
}

interface arrayData {
  ticketData: [ticketData];
}
