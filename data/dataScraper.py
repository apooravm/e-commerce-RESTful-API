import requests
from bs4 import BeautifulSoup

def getDataKaragiri(productURL):
    page = requests.get(productURL)
    soup = BeautifulSoup(page.content, "html.parser")
    
    dummy_specs = [{'Blouse piece': 'YES, thelehenga comes with a blouse piece of 0.8 meters.',
      'Type': ' Lehenga Choli',
      'Lehenga Fabric': 'Art Silk',
      'Blouse Fabric': 'Art Silk',
      'Dupatta Fabric': 'Net',
      'Lehenga Colour': 'Cream',
      'Blouse Colour': 'Cream',
      'Design detail/ work': 'Digital Print with Dori, Sequence Embroidered Border and Pearl work'},
     {'Blouse piece': 'YES, the saree comes with a blouse piece of 0.8 meters.',
      'Type': 'Lehenga Choli',
      'Lehenga Fabric': 'TaffetaSilk',
      'Blouse Fabric': 'Taffeta Silk',
      'Dupatta Fabric': 'Net',
      'Lehenga Colour': 'Wine',
      'Blouse Colour': 'Wine',
      'Dupatta Colour': 'Wine',
      'Design detail/ work': 'Cord embroidery, Stone handwork'},
     {'Fabric': 'Soft Net + Gota Embroidery - Foil',
      'Work': 'Gota Embroidery - Foil, Zari'},
     {'Blouse piece': 'YES, the saree comes with a blouse piece of 0.8 meters.',
      'Type': 'Lehenga Choli, Semi-stitched',
      'Lehenga Fabric': 'Maslin Cotton',
      'Choli Fabric': 'Maslin Cotton',
      'Dupatta Fabric': 'Pure Georgette',
      'Lehenga Colour': 'White',
      'Choli Colour': 'Navy',
      'Dupatta Colour': 'Deep Pink',
      'Lehenga Length': '42 INCH Length AND 42 INCH Waist',
      'Choli Length': '1MTR',
      'Dupatta Length': '2.30MTR',
      'Design detail/ work': 'Thread Emroidered with all-over mirror pasting work(Heavy latkan attached with waist string),Embellished mirror work,Shibburi print with lace on border'},
     {'Note': 'The delivery of this lehenga can take up to 15 days.'},
     {'Blouse piece': 'YES, the lehenga comes with a blouse piece of 0.8 meters.',
      'Type': 'Lehenga Choli, Semi-stitched',
      'Lehenga Fabric': 'Organza',
      'Blouse Fabric': 'Organza',
      'Dupatta Fabric': 'Organza',
      'Lehenga Colour': 'Green',
      'Lehenga Flair': '3.50m',
      'Size': 'upto 42 (Bust and waist)',
      'Design detail/ work': 'Sequins, Zari, Embroidery work.'},
     {'Type': 'Lehenga',
      'Gown Fabric': 'Natural Crepe',
      'Inner Fabric': 'Silk Crepe',
      'Gown and Inner Colour': 'Black',
      'Work': 'Print with Sequence Embroidered work',
      'Belt': 'Fancy Sequins Belt'},
     {'Type': 'Lehenga',
      'Gown Fabric': 'Natural Crepe',
      'Inner Fabric': 'Silk Crepe',
      'Gown and Inner Colour': 'Black',
      'Work': 'Print with Sequence Embroidered work',
      'Belt': 'Fancy Sequins Belt'},
     {'Lehenga and Choli Fabric': 'Art Silk',
      'Dupatta Fabric': 'Organza',
      'Lehenga, Choli and Dupatta Color': 'Deep Pink',
      'Size': 'Up to 42 bust and waist',
      'Choli Length (Unstitched)': '1mtr',
      'Lehenga Length (Semi-stitched)': '42 inches',
      'Dupatta Length (Ready To Wear)': '2.40mtr',
      'Lehenga and Choli Work': 'Thread with sequence embroidered work',
      'Dupatta Work': 'Thread with Sequins embroidered lace on the border with all-over print'}]
    
    dummy_desc = [['Dupatta ColourCream',
      'This beautiful cream lehenga choli is the epitome of elegance, perfect for festivals and special occasions.',
      'Get this beautifullehenga cholionline at Karagiri - The best online store forbanarasi silksaree, kanjivaram silk saree, paithani silk saree,salwar suit and designer lehenga.'],
     
     ['This beautiful purple lehenga choli is the epitome of elegance, perfect for festivals and special occasions.',
      'Get this beautiful lehenga choli at Karagiri - The best online store for salwar suits, designer lehengas, anarkali suits, silk sarees, chiffon sarees, and cotton sarees.'],
     
     ['She had a sense of music in her style. A melody is similar to that of a Raag in Indian classical music. A Raag that makes its presence known, amidst a background that is full of noise. A raag that pleases the listener with its intricate and mellow beauty.',
      'Get this pink designer lehenga at KARAGIRI - the best online store for silk sarees, salwar suits, and designer lehengas.',
      'A Designer lehenga has the unique ability to present you as a work of art while also saving you from an unflattering over-the-top look! Net designer lehengas are extremely simple to style; they can look great with minimal accessories and a natural make-up look.',
      'Like this pink designer lehenga with net prints and designs that comes with a sequin dupatta and flowery lehenga choli. It is suitable for a wide range of special occasions like wedding parties, reception lehenga, and events.',
      'Buy this beautiful and gorgeous, pink designer lehenga from our exquisite collection of designer lehenga only at KARAGIRI.'],
     
     ['Shop for this best yellow designer lehenga online at KARAGIRI.'],
     
     ['This beautiful lehenga choliis the epitome of elegance and can be paired with sarees for an elegant look.',
      'Get this beautiful lehenga choli online at Karagiri - The best online store for banarasi sarees, kanjivaram sarees, paithani sarees, organza sarees and linen sarees.'],
     
     ['This organza designer lehenga is semi-stitched.This sun orange floral designer organza lehenga with floral embroidery & soft net duppata is a must have in your closet.',
      "You'll light up the room in this decadent organza lehenga! This lehenga choli has been made from organza fabric for her long flowing, feminine look. The crop top is also created out of organza and is designed to make you look exotic.",
      'A matching soft light dupatta with an embroidered pattern at the neckline completes this outfit.'],
     
     ['This beautiful green lehenga choli is the epitome of elegance, perfect for festivals and special occasions.',
      'Get this beautifullehenga choli online at Karagiri - The best online store for salwar suits, designer lehengas, anarkali suits and palazzo suits.'],
     
     ['This gorgeous black indo-western lehenga gown is absolutely alluring. Pair it with silver jewellery.',
      'Shop this lehenga online from Karagiri - The best store for lehengas, georgette sarees, silk sarees, linen sarees, chiffon sarees and anarkali suits.'],
     
     ['This gorgeous black indo-western lehenga gown is absolutely alluring. Pair it with silver jewellery.',
      'Shop this lehenga online from Karagiri - The best store for lehengas, georgette sarees, silk sarees, linen sarees, chiffon sarees and anarkali suits.'],
     
     ['The stunning jewellery she had was extremely stunning. The beautiful earrings she wore were one of a kind. The beautiful designer clothes she wore were extremely stunning.',
      'Buy this lehenga choli online from Karagiri - The best store for designer lehengas, lehenga choli, banarasi sarees, kanjivaram sarees and silk sarees.',
      'This stunning beige lehenga is one of a kind. The work on the lehenga makes it stand out. The work on the lehenga makes it one of a kind. The lehenga choli would look great with pearl jewellery.']]
    
    # Get Specifications and Descriptions
    def getSpecs_and_Desc(data: list) -> (dict, list):
        specs = {}
        desc = []
        for x in data:
            val = x.split(":")
            key = val[0].strip().replace('?', '').replace('˜', '')
            if len(key) > 0:
                value = "".join(val[1:]).strip().replace('?', '').replace('˜', '')
                if len(value) > 0:
                    specs[f"{key}"] = value
                else:
                    desc.append(key)
        return specs, desc
    
    product = {
        "title": "",
        "colour": "",
        "images": [],
        "specifications": {},
        "description": [],
        "curr_price": 0,
        "actual_price": 0,
        "link": str(productURL)
    }
    
    images = []
    specs_desc = []
    curr_price = 0
    actual_price = 0
    
    colors = ['Grey', 'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Black', 'White', 'Gray', 'Brown', 'Tan', 'Maroon', 'Navy blue', 'Turquoise', 'Olive', 'Lime green', 'Teal', 'Indigo', 'Lavender', 'Gold', 'Silver', 'Beige', 'Coral', 'Magenta', 'Sky blue', 'Mint green', 'Peach', 'Salmon', 'Slate gray']
    
    for h1_tag in  soup.find("h1"):
        title = h1_tag.text
        product["title"] = title
        for clr in colors:
            if clr.lower() in title.lower().split(" "):
                product["colour"] = clr
                break
        
    img_tags = soup.find_all("img")
    for image in img_tags:
        try:
            product['images'].append(f"https:{image['src']}")
        except:
            pass
    # desc
    sd = []
    p_tags = soup.find_all("p")
    for x in p_tags:
        if "data-mce-fragment" in str(x):
            sd.append(x.text)
            
    vals = []
    span_tags = soup.find_all("span", class_="money")
    for x in span_tags:
        for y in str(x).split(" "):
            if y[0].isdigit():
                vals.append(y)
    text = ""
    char_switch = False
    for strn in str(vals[0] + vals[-1]):
        if strn.isdigit():
            text += strn
            char_switch = True
        elif strn == ",":
            continue
        elif char_switch:
            text += " "
            char_switch = False

    price_array= text.split(" ")
    product['curr_price'] = int(price_array[0])
    product['actual_price'] = int(price_array[1])
    
    s, d = getSpecs_and_Desc(sd)
    if len(s) < 1:
        product['specifications'] = random.choice(dummy_specs)
    elif len(d) < 1:
        product['description'] = random.choice(dummy_desc)
    else:
        product['specifications'], product['description'] = s, d 
    
    return product

def getProductsFromPage(linkToProductPage):
    page = requests.get(linkToProductPage)
    soup = BeautifulSoup(page.content, "html.parser")
    links = []

    for a_tag in soup.find_all("a"):
        if "product-thumb-href" in str(a_tag):
            links.append(f"https://www.karagiri.com{a_tag['href']}")
    return links

def getProductList(prodPageLinkArr):
    links = []
    for link in prodPageLinkArr:
        for prodLink in getProductsFromPage(link):
            links.append(prodLink)
    allProds = []
    
    miscData = []
    
    for link in links:
        try:
            prod = getDataKaragiri(link)
            allProds.append(prod)
        except:
            pass
        
    return allProds

# url for product list pages
urlsArr = ["https://www.karagiri.com/search?page=1&q=lehenga&type=product",
           "https://www.karagiri.com/search?page=2&q=lehenga&type=product",
           "https://www.karagiri.com/search?page=3&q=lehenga&type=product",
           "https://www.karagiri.com/search?page=4&q=lehenga&type=product",
           "https://www.karagiri.com/search?page=5&q=lehenga&type=product",
           "https://www.karagiri.com/search?page=6&q=lehenga&type=product",
           "https://www.karagiri.com/search?page=7&q=lehenga&type=product",
           "https://www.karagiri.com/search?page=8&q=lehenga&type=product",]

prod_all_arr = getProductList(urlsArr)

userId = "641291de06403752144eff82"

import requests
import json
import random

with open('sampleData.json', 'r') as file:
    loadedData = json.load(file)

len(loadedData)

url = "http://localhost:5000/api/product/641291de06403752144eff82"
karagiri_id = "641291de06403752144eff82"

prodId = 1

for prod in loadedData:
    product = {
        "product_id": prodId,
        "user_id": karagiri_id,
        "link": prod['link'],
        "variant_sku": f"ESP-{prodId}",
        "product_type": "Lehenga",
        "images": prod['images'],
        "title": prod['title'],
        "colour": prod['colour'],
        "brand": "Karagiri",
        "is_in_stock": True,
        "stock_amount": random.randint(1, 1000),
        "current_price": prod['curr_price'],
        "actual_price": prod['actual_price'],
        "specifications": prod['specifications'],
        "description": prod['description']
    }
    prodId += 1
    payload = json.dumps(product)