"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idMapper = void 0;
const SupportedCurrency_1 = require("../domain/SupportedCurrency");
const CMCId_1 = require("./CMCId");
const ens = [
    [CMCId_1.CMCId.ETH, SupportedCurrency_1.SupportedCurrency.ETH],
    [CMCId_1.CMCId.BNB, SupportedCurrency_1.SupportedCurrency.BNB],
    [CMCId_1.CMCId.TRX, SupportedCurrency_1.SupportedCurrency.TRX],
    [CMCId_1.CMCId.HT, SupportedCurrency_1.SupportedCurrency.HT],
    [CMCId_1.CMCId.FTM, SupportedCurrency_1.SupportedCurrency.FTM],
    [CMCId_1.CMCId.MATIC, SupportedCurrency_1.SupportedCurrency.MATIC],
    [CMCId_1.CMCId.ONE, SupportedCurrency_1.SupportedCurrency.ONE],
    [CMCId_1.CMCId.CELO, SupportedCurrency_1.SupportedCurrency.CELO],
    [CMCId_1.CMCId.AVAX, SupportedCurrency_1.SupportedCurrency.AVAX],
    [CMCId_1.CMCId.EGLD, SupportedCurrency_1.SupportedCurrency.EGLD],
    [CMCId_1.CMCId.XPNET, SupportedCurrency_1.SupportedCurrency.XPNET],
    [CMCId_1.CMCId.ONT, SupportedCurrency_1.SupportedCurrency.ONT],
    [CMCId_1.CMCId.STAKE, SupportedCurrency_1.SupportedCurrency.STAKE],
    [CMCId_1.CMCId.ALGO, SupportedCurrency_1.SupportedCurrency.ALGO],
    [CMCId_1.CMCId.FUSE, SupportedCurrency_1.SupportedCurrency.FUSE],
    [CMCId_1.CMCId.XTZ, SupportedCurrency_1.SupportedCurrency.XTZ],
    [CMCId_1.CMCId.VLX, SupportedCurrency_1.SupportedCurrency.VLX],
    [CMCId_1.CMCId.IOTX, SupportedCurrency_1.SupportedCurrency.IOTX],
    [CMCId_1.CMCId.AURORA, SupportedCurrency_1.SupportedCurrency.AURORA],
    [CMCId_1.CMCId.VET, SupportedCurrency_1.SupportedCurrency.VET],
    [CMCId_1.CMCId.CKB, SupportedCurrency_1.SupportedCurrency.CKB],
];
const enMap = new Map(ens);
const enMapRev = new Map(ens.map(([k, v]) => [v, k]));
function idMapper() {
    function toDomain(id) {
        return enMap.get(id);
    }
    function fromDomain(domain) {
        return enMapRev.get(domain);
    }
    return {
        toDomain,
        fromDomain,
        toDomainList: (models) => models.map(toDomain),
        fromDomainList: (domains) => domains.map(fromDomain),
    };
}
exports.idMapper = idMapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRNYXBwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWwvY29pbm1hcmtldGNhcC9JZE1hcHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtRUFBZ0U7QUFDaEUsbUNBQWdDO0FBU2hDLE1BQU0sR0FBRyxHQUFpQztJQUN0QyxDQUFDLGFBQUssQ0FBQyxHQUFHLEVBQUUscUNBQWlCLENBQUMsR0FBRyxDQUFDO0lBQ2xDLENBQUMsYUFBSyxDQUFDLEdBQUcsRUFBRSxxQ0FBaUIsQ0FBQyxHQUFHLENBQUM7SUFDbEMsQ0FBQyxhQUFLLENBQUMsR0FBRyxFQUFFLHFDQUFpQixDQUFDLEdBQUcsQ0FBQztJQUNsQyxDQUFDLGFBQUssQ0FBQyxFQUFFLEVBQUUscUNBQWlCLENBQUMsRUFBRSxDQUFDO0lBQ2hDLENBQUMsYUFBSyxDQUFDLEdBQUcsRUFBRSxxQ0FBaUIsQ0FBQyxHQUFHLENBQUM7SUFDbEMsQ0FBQyxhQUFLLENBQUMsS0FBSyxFQUFFLHFDQUFpQixDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDLGFBQUssQ0FBQyxHQUFHLEVBQUUscUNBQWlCLENBQUMsR0FBRyxDQUFDO0lBQ2xDLENBQUMsYUFBSyxDQUFDLElBQUksRUFBRSxxQ0FBaUIsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQyxhQUFLLENBQUMsSUFBSSxFQUFFLHFDQUFpQixDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUUscUNBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ3BDLENBQUMsYUFBSyxDQUFDLEtBQUssRUFBRSxxQ0FBaUIsQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQyxhQUFLLENBQUMsR0FBRyxFQUFFLHFDQUFpQixDQUFDLEdBQUcsQ0FBQztJQUNsQyxDQUFDLGFBQUssQ0FBQyxLQUFLLEVBQUUscUNBQWlCLENBQUMsS0FBSyxDQUFDO0lBQ3RDLENBQUMsYUFBSyxDQUFDLElBQUksRUFBRSxxQ0FBaUIsQ0FBQyxJQUFJLENBQUM7SUFDcEMsQ0FBQyxhQUFLLENBQUMsSUFBSSxFQUFFLHFDQUFpQixDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDLGFBQUssQ0FBQyxHQUFHLEVBQUUscUNBQWlCLENBQUMsR0FBRyxDQUFDO0lBQ2xDLENBQUMsYUFBSyxDQUFDLEdBQUcsRUFBRSxxQ0FBaUIsQ0FBQyxHQUFHLENBQUM7SUFDbEMsQ0FBQyxhQUFLLENBQUMsSUFBSSxFQUFFLHFDQUFpQixDQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDLGFBQUssQ0FBQyxNQUFNLEVBQUUscUNBQWlCLENBQUMsTUFBTSxDQUFDO0lBQ3hDLENBQUMsYUFBSyxDQUFDLEdBQUcsRUFBRSxxQ0FBaUIsQ0FBQyxHQUFHLENBQUM7SUFDbEMsQ0FBQyxhQUFLLENBQUMsR0FBRyxFQUFFLHFDQUFpQixDQUFDLEdBQUcsQ0FBQztDQUNyQyxDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdEQsU0FBZ0IsUUFBUTtJQUNwQixTQUFTLFFBQVEsQ0FBQyxFQUFTO1FBQ3ZCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsU0FBUyxVQUFVLENBQUMsTUFBeUI7UUFDekMsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFDO0lBQ2pDLENBQUM7SUFDRCxPQUFPO1FBQ0gsUUFBUTtRQUNSLFVBQVU7UUFDVixZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzlDLGNBQWMsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7S0FDdkQsQ0FBQztBQUNOLENBQUM7QUFiRCw0QkFhQyJ9