const words_01 = {
    "illustrious": "uh.*luh*.stree.uhs",
    "imperious": "uhm.*pee*.ree.uhs",
    "another": "uh.*nuh*.thr",
    "always": "*aal*.wayz",
    "amazing": "uh.*may*.zuhng",
    "amazingly": "uh.*may*.zuhng.lee",
    "amazingness": "uh.*may*.zuhng.nuhs",
    "amazement": "uh.*mayz*.muhnt",
    "methodology": "meh.thuh.*daa*.luh.jee",
    "methodologies": "meh.thuh.*daa*.luh.jeez",
    "method": "*meh*.thuhd",
    "methods": "*meh*.thuhdz",
    "methodical": "muh.*thaa*.duh.kl",
    "methodically": "muh.*thaa*.di.kuh.lee",
    "guiding": "*gai*.duhng",
    "guidance": "*gai*.dns",
    "guide": "gide",
    "collaborating": "kuh.*la*.br.ay.tuhng",
    "viable": "*vai*.uh.bl",
    "documentation": "daa.kyuh.men.*tay*.shn",
    "engage": "uhn.*gayj*",
    "manipulated": "muh.*ni*.pyuh.lay.tuhd",
    "contrarian": "kaan.*treh*.ree.uhn",
    "perspective": "pr.*spek*.tuhv",
    "realignment": "ree.uh.*line*.muhnt",
    "resupply": "ree.suh.*plai*",
    "resolved": "ruh.*zaalvd*",
    "research": "*ree*.srch",
    "retreat": "ruh.*treet*",
    "redefine": "ree.duh.*fine*",
    "rechargeable": "ree.*chaar*.juh.bl",
    "realignment": "ree.uh.*line*.muhnt",
    "machine": "muh.*sheen*",
    "machines": "muh.*sheenz*",
    "machinery": "muh.*shee*.nuh.ree",
    "machinist": "muh.*shee*.nuhst",
    "machinists": "muh.*shee*.nuhsts",
    "machineries": "muh.*shee*.nr.eez",
    "machinable": "muh.*shee*.nuh.bl",
    "architecture": "aar.*kuh*.tek.chr",
    "architect": "aar.*kuh*.tekt",
    "architects": "aar.*kuh*.tekts",
    "architectural": "aar.kuh.*tek*.shr.uhl",
    "architecturally": "aar.kuh.*tek*.shr.uh.lee",
    "empathy": "em.*puh*.thee",
    "empathetic": "em.puh.*theh*.tuhk",
    "empires": "*em*.pai.urz",
    "empire": "*em*.pai.ur",
    "emperor": "*em*.pr.ur",
    "empress": "*em*.pruhs",
    "princess": "*prin*.suhz",
    "princesses": "*prin*.suh.suhz",
    "prince": "prins",
    "princes": "*prin*.sez",
    "restoration": "reh.str.*ay*.shn",
    "dictation": "dik.*tay*.shn",
    "interception": "in.tr.*sep*.shn",
    "concoction": "kuhn.kaak.shn",
    "remission": "ruh.*mi*.shn",
    "interruption": "in.tr.*uhp*.shn",
    "interest": "*in*.tr.uhst",
    "wringing": "*ring*.uhng",
    "enforce": "uhn.*forst*",
    "despises": "duh.*spai*.zuhz",
    "revolve": "ruh.*vaalv*",
    "underword": "*uhn*.dr.wurld",
    "richness": "*rich*.nuhs",
    "savagely": "*sa*.vuhj.lee",
    "estimation": "eh.stuh.*may*.shn",
    "squirel": "skwur.uhl",
    "colonel": "kuhr.nuhl",
    "kernel": "kuhr.nuhl",
    "viable": "*vai*.uh.bl",
    "retreat": "ree.*treet*",
    "research": "*ree*.srch",
    "welter": "*wel*.tr",
    "weltering": "*wel*.tr.uhng",
    "zealot": "*zeh*.luht",
    "coaxial": "kow.*ak*.see.uhl",
    "excavations": "ek.skuh.*vay*.shnz",
    "attacks": "uh.*taks*",
    "ambivalent": "am.*bi*.vuh.luhnt",
    "environmental": "uhn.vai.urn.*mehn*.tl",
    "observing": "uhb.*zur*.vuhng",
    "overlaps": "ow.vr.*laps*",
    "overpowered": "ow.vr.*pau*.urd",
    "extraterrestrial": "ek.struh.tr.*eh*.stree.uhl",
    "inextricably": "i.nuhk.*stri*.kuh.blee",
    "perplexed": "pr.*plekst*",
    "pretext": "*pree*.tehkst",
    "enslaved": "uhn.*slayvd*",
    "negatives": "ne.guh.*tuhvz",
    "services": "*sur*.vuh.suhz",
    "reverted": "ruh.*vur*.tuhd",
    "unhealthy": "uhn.*hel*.thee",
    "unverified": "uhn.*veh*.ruh.fide",
    "unbalanced": "uhn.*ba*.luhnst",
    "unfairly": "uhn.*fehr*.lee",
    "unwelcome": "uhn.*wel*.km",
    "unregulated": "uhn.*re*.gyuh.lay.tuhd",
    "unjustified": "uhn.*juh*.stuh.fide",
    "unclassified": "uhn.*kla*.si.fide",
    "unfairness": "uhn.*fehr*.nuhs",
    "uncertainties": "uhn.*sur*.tuhn.teez",
    "unsettling": "uhn.*seh*.tuh.luhng",
    "unveil": "uhn.*vayl*",
    "unchanged": "uhn.*chaynjd*",
    "unsold": "uhn.*sowld*",
    "unbroken": "uhn.*brow.kn",
    "attentive": "uh.*ten*.tuhv",
    "circulation": "sur.kyuh.*lay*.shn",
    "permanence": "*pr*.muh.nuhns",
    "persuading": "pr.*sway*.duhng",
    "prestigious": "pruh.*sti*.juhs",
    "productions": "pruh.*duhk*.shns",
    "periphery": "pr.*i*.fr.ee",
}

const words_02_raw = `
underworld
uhn
dr
wurld

Inquisition
in
kwuh
zi
shn

Stardust
staar
duhst

Phosphate
faa
sfayt

Misconceptions
mis
kuhn
sep
shnz

Reward
ruh
word

rewarded
ruh
wor
duhd

ward
word

wards
wordz

towards
tuh
wordz

wardens
wor
dnz

reward
ruh
word

rewarding
ruh
wor
duhng

handlers
hand
lrz

fiddler
fi
duh
lr

psychotherapist
sai
kuh
theh
ruh
pist

quagmire
kwag
mai
ur

redefining
ree
duh
fai
nuhng

highlands
hai
luhndz

handshake
hand
shayk

supervised
soo
pr
vized

proud
prowd

Toothbrush
tooth
bruhsh

Sunflower
suhn
flau
ur

Football
fut
baal

Raincoat
rayn
kowt

Moonlight
moon
lite

Newspaper
nooz
pay
pr

sunglasses
suhn
gla
suhz

bookshelf
buk
shelf

toothpaste
tooth
payst

jellyfish
jeh
lee
fish

Airplane
ehr
playn

Teapot
tee
paat

Birthday
burth
day

Headphones
hed
fownz

Pineapple
pai
na
pl

Snowman
snow
man

Icecream
ai
skreem

Waterfall
waa
tr
faal

Firefighter
fai
ur
fai
tr

Backpack
bak
pak

Grasshopper
gras
haa
pr

Dishwasher
dish
waa
shr

Blueberry
bloo
beh
ree

Dragonfly
dra
guhn
flai

Toothpick
tooth
pik

bored
bord

Blackboard
blak
bord

Thunderstorm
thuhn
dr
storm

Basketball
ba
skuht
baal

Butterfly
buh
tr
flai

Bookshelf
buk
shelf

shirt
shurt

Encounter
uhn
kown
tr

aloud
uh
lowd

cocaine
kow
kayn

worldwide
wurld
wide

abnormalities
ab
nor
ma
luh
teez

stipulated
sti
pyuh
lay
tuhd

repeatedly
ruh
pee
tuhd
lee

forlorn
for
lorn

sensor
sen
sr

escalate
eh
skuh
layt

cheeses
chee
zuhz

lonesome
lown
sm

contraptions
kuhn
trap
shnz

grazing
gray
zuhng

androgynous
an
draa
juh
nuhs

refresh
ruh
fresh

backend
ba
kend

extinction
uhk
stingk
shn

morphological
mor
fuh
laa
juh
kl

aboard
uh
bord

bored
bord

hallows
ha
lowz

healthiest
hel
thee
uhst

century
sen*
chr
ee

eleven
uh
leh
vn

twelfth
twelth

thirteenth
thr
teenth

twentieth
twen
tee
uhth

thirtieth
thur
tee
uhth

eighth
aytth

ninth
nineth

nine
nine

sire
sai
ur

victimized
vik
tuh
mized

gestapo
guh
staa
pow

malpractice
mal
prak
tuhs

uncontrollable
uhn
kuhn
trow
luh
bl

valiant
va
lee
uhnt

Hamburger
ham
bur
gr

Restaurant
reh
str
aant

Comfortable
kuhmf
tr
bl

February
feh
byoo
eh
ree

Vegetable
vej
tuh
bl

Refrigerator
ruh
fri
jr
ay
tr

Chocolate
chaa
kluht

Schedule
skeh
jool

Television
teh
luh
vi
zhn

Computer
kuhm
pyoo
tr

Interesting
in
tr
uh
stuhn

Yellow
yeh
low

Necessary
neh
suh
seh
ree

Temperature
tem
pruh
chr

Anniversary
a
nuh
vur
sr
ee

Opportunity
aa
pr
too
nuh
tee

Presentation
preh
zuhn
tay
shn

Entrepreneur
aan
truh
pruh
noor

Cathedral
kuh
thee
druhl

Enthusiasm
uhn
thoo
zee
a
zm

Necessary
neh
suh
seh
ree

Banana
buh
na
nuh

Guitar
guh
taar

Camera
ka
mr
uh

Hotel
how
tel

Internet
in
tr
net

Beautiful
byoo
tuh
fl

Hospital
haa
spuh
tl

Jewelry
jool
ree

Language
lang
gwuhj

sandwich
san
dwuhch

Musician
myoo
zi
shn

Office
aa
fuhs

Orange
aw
ruhnj

Parents
peh
ruhnts

Patient
pay
shnt

Photograph
fow
tuh
graf

Physical
fi
zi
kl

Popular
paa
pyuh
lr

Position
puh
zi
shn

Possible
paa
suh
bl

President
preh
zuh
dnt

Professional
pruh
feh
shuh
nuhl

Program
prow
gram

Property
praa
pr
tee

Psychology
sai
kaa
luh
jee

Public
puh
bluhk

Purpose
pur
puhs

Quality
kwaa
luh
tee

Question
kwes
chn

Realize
ree
uh
lize

Reasonable
ree
zuh
nuh
bl

Reference
reh
fr
uhns

Regular
reh
gyuh
lr

Relationship
ruh
lay
shuhn
shuhp

Religion
ruh
li
jn

Security
suh
kyur
uh
tee

Serious
see
ree
uhs

Similar
si
muh
lr

Simple
sim
pl

Social
sow
shl

Sometimes
suhm
timez

Stationery
stay
shuh
neh
ree

Successful
suhk
seh
sfl

Supermarket
soo
pr
maar
kuht

Technology
tek
naa
luh
jee
`
const words_02 = {}
b = words_02_raw.trim().replaceAll("\n\n\n", "\n\n").toLowerCase().split("\n\n").map(x => {
    const arr = x.split("\n");
    const word = arr[0];
    const pron = arr.slice(1).join(".");
    words_02[word] = pron
})

const words = {...words_01, ...words_02}