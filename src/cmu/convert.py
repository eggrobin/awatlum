# Run through https://github.com/menelik3/cmudict-ipa/blob/master/cmudict-0.7b-ipa.txt

import json
f = open("cmudict-0.7b-ipa.txt")

obj = {}

for line in f:
    split = line.strip().split("\t")
    name = split[0].lower()
    if not name.isalpha():
        continue
    value = split[1].split(", ")
    obj[name] = value

print(json.dumps(obj, indent=1, sort_keys=True, ensure_ascii=False))