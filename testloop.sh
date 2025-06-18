#!/usr/bin/bash

inputfl="samplechats.txt";
url="https://utilitysolutional.app.n8n.cloud/webhook-test/c32064ec-4732-4658-b4ec-f413f7f48b7b"
url2="https://utilitysolutional.app.n8n.cloud/webhook/085e393e-e14e-45b2-84ed-92f7db93e67c"
slkbbk="https://utilitysolutional.app.n8n.cloud/webhook/085e393e-e14e-45b2-84ed-92f7db93e67c"

linenum=$(wc -l < $inputfl);
while IFS= read -r line
do
	#echo "$line";
	#echo "Line count = $linenum";
	curl --X POST -d "{ \"chat\": \"$line\" }" -H 'content-type: application/json' "https://utilitysolutional.app.n8n.cloud/webhook/085e393e-e14e-45b2-84ed-92f7db93e67c" 
	sleep 5m;
done < "$inputfl"
