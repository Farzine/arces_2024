"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Schedulecard from "@/components/Schedulecard";

export default function Schedule() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 p-16 ">
        <div className="flex-row w-4/5 bg-white mx-auto h-auto pb-12 rounded-md justify-center ">
          {/* heading box */}
          <div className="heading flex my-4 justify-center">
            <svg
              className="my-3"
              width="40"
              height="40"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="72" height="72" fill="url(#pattern0_413_663)" />
              <defs>
                <pattern
                  id="pattern0_413_663"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image0_413_663" transform="scale(0.00390625)" />
                </pattern>
                <image
                  id="image0_413_663"
                  width="256"
                  height="256"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAHYgAAB2IBOHqZ2wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABj7SURBVHic7d15lJ1Fmcfxb3cnIQlBktCQIBDCDrIo+xLWZJiwS0RkUXEcBGdEAXEYFxgHnWEAAZEjy6AjIiCLAqOo7IgoiwPEEAEniiQQ9qwYEiBJp69/PH3tkNzbffvep6re5fc5pw6eI1RX1fu+z32XqqfakCzZDTgamAS8FxiTtjl1LQdeB/4I3AHcBLyStEUiObYF8HOgktPyFnAeMMx7YESKbjKwkPQXsUd5DLtzEZEG7AW8Q/oL17P8P7C25yCJFNFo4DXSX7Ahyk2O4yRSSBeR/kINWSb4DZVIsQwHFpP+Ig1ZbnEbLZGCOZL0F2joshh9Fci89tQNKKmdUjcggjWBrVM3QvqmAJBGWT6VlaWfuaUAkEYldQMiKUs/c0sBII2yTJt9OXUDpG8KAGlMTd2ACBZjawUkwxQA0rgXWJK6EYHdjc1ylAzrSN2AkuoCRmFTgYvqZODF1I0QyapRFHcq8A2O4yRSWHtSvMVAf0CLgUQadiCwgPQXrkf5P/TtX2TANgN+SvoLuNmyBDgXGOo9MBJWW+oGyLvsQm9KsA3JbkqwZVhKsBlYSrCbgVeTtkikpG7E99f82LjNl5Q0D0CkxBQAREpMAUCkxBQAREpMAUCkxAalboBIjozA5myMxTZDeQV4LmmLWqQAINK/I4DPAPsDa6zy/70I/C9wIfBS3GaJaB5ASBsBD9HYuL0NfBlNrpPIFADC2JnmVmvezOp3CZmll4Aiq1sfW5vRzFTsjwA/ISfrIhQARFb3A2CDFv77g7CNUTJ/J6AAIPJuk7Al2q06FLiVjAcBBQCRdzvJsa5DyfjjgAKASK8OYLJznZl+HFAAEOk1FhgZoN7M3gkoAIj0Wjdg3Zm8E1AAEOn1ZuD6M3cnoKnA+dKB3aZujH2m2hB4v/PfOBroBGZjW3u9CMxx/htZ9SqwgrD7ZRyEfR34ELA04N9piKYtZtMQYDtgG2BbbJvtbYFNSRO0/wI821NmAE8BTwKzErQltN8Ae0f4O3eQkSAgabVhF/gJwLex1NpLSZ/pt5HyBvAr4HxswUzIZ+hYTiPe+P2CjL0TkDjGAycCP8RuO1NfyJ5lBnAF9us2ymm8YhqGPfooCIibDmwp6SXAn0l/kcYqXdgdzVnA9q0OYkRHAt0oCEgL1sBOpB8A80h/MWahzAS+CezWwrjG8lXijo2CQAG0AROAK4H5pL/gslyeBb4ObNXUSMdxIQoC0oCx2G1umW7vPcuvsZegwwc68BEoCEhd+2AJOfLy1j7r5Q3gUmDzgRyECBQE5G8GAx8HppP+gilqWYEl5JjY4DGJQUGg5NbAblP/RPoLpExlWs+4Z2Ha+rnE7ftdZGjacFkNB87EdsNNfTGUufweS7eVevaq7gRKYjDwz8SdFKLSf/kdcHAfxy20KdgjioJAQbUBx6M3+lkvDxJ/PsEUYJlD25spCgIR7ETjeeBV0pdu4EdY/v7QDgXeidy/VYveCQSyLvAd4t/aqfiURcC/Yo9tIaT85V+16E7AURvwKWAB6Q+sSutlOrAHvrJ08VeLgoCDzYD7SX8wVXzLCmxZ9Vq0LosXf7UoCDSpAzgDWEL6g6gSrswC9qN5Wb74q+VnhM1eVDgbYW+PUx84lTilG7iKga8xyMILv0bLRQPs27uknlQR09HYyZDHJBWrWgg831NmYXn75mErEOf3/O9F9L7UfKPnvxtE763xUGBtYJ2e0onthTcO2ARLWjKeYtxmPg0cA/yhgX93CrbBZ6gXiiHsg329khrWBL5H+kjdTFkOPNHT/tOwufHr+A5Pn9qwdyVTsPXxP8bW9Kcel2bKEuCT/fQ3D7f9tcqD/fSrtLbAElimPkCNljexZJFnYxmEsrg8Fmz33KOwDEePka/Pp9dRe1zzevFXyyY1+lRqR2C3vqkPTH/lGew5bhKWDTiPOrHZk9dhKcRTj2l/ZRr2eFOV94u/AvxT/cNTLu3AfxA3p9tAy5PAV8jeuncP7djb9yvI9gKqeVjQLcLFX6HFl4FFMRy4jfQHo1Z5keynwPLWgV1k1wJvkf4YrFqWU4yLvwJc09ghKa4xWAba1Adi5dKFJbY4DH2vHQV8jvImUpkJ/HfA+i9p/FAUz/uwz2GpD3K1/AW4GNvCS1a3H3A7+Xp52OrFP66n7xcF+hunNj78xbIH2ZnL/xKWPGTtoD0ujq2xRVhFzqm48sVfFSIIbNPYkBfLJOzTWeqD/BpwOlqq2axxwHcpzvN4Xxd/lWcQmNbAGBfOEcDbpD3AC4AvYpONpHWbYS8Mi/Bo0NfFX+UVBA7t5+8UzjHYG9xUB3c5cBlxZ+WVyS7kOzFLIxd/VatB4PoG/05hTCHtxX8vtnW3hNUGHAvMJv0FHerirzq/yb/1MLaZaWkcQroXRnOAj4bvoqxiBLZZSB4eC5q5+Ks+ycAeab9Pyd45/R3pnvmvx6a7Sjp7kO11Ha1c/FXjgKupP2mqG9tG7YAW/87f5GU58C7AA9ivQUxzgBOBn0f+u1LbEOAcLP9fliZWzcIWb812qm84tvJzC2A97EvXC8AvgVed/kZubIp9Zosd0e8B3huhfzJwewLPkf5Xv4LlZNBKvEA6ib8V1zvAZ8nP3VFZjcRSguf9tl/qGAY8StwDOhvYNUbnxM3ppPkqpIs/sOuJe0Dvx/YHkPzZF3s2jnm+fDpKz0rqC8Q9mJeQrZdKHjqxT0vXYSmjpgJ3ApcDB5Hf5CP1bIClT4t1ziyipPPvQzsQW0Yb4yB2YUtUi2Rt4AL6X3//AvBxivWuY01slWGsIDADLfxytQmW1TbGwVuMrScokq0Z+EvTm8hu7sFmdGAbg8QKArdjWZCkRYOB3xLnoC0Ado/TrWg2w9JcNTMe92Ipw4vkK8QLAl+K1KdC+wZxDtYc4AOR+hTLUCy5aCvjUsSccqcSJzfkMvz3JCyVg4gz1/tVirmQ50xaH5suLLNS0XyMOJ8JZwOjI/WpUMYQJ3vsK9jUyqIZhF8q7u9HbnssnyDOD8zNsTpUJLcS/sDMBbaN1aHIJuI3TvMp3ruAqs8Q53Hg+FgdKoLjCH9AFgI7xepQAmfjO17bx21+VB6PSv2VedhdrfRjDPbLHPJgvI1tnFhkV+A7ZpPjNj+6CwgfBG6N1pscu4WwB6EbyyhTdDfgO25FH7N27Fk9dBA4JlaH8mgy4Q9AWb7NegeA4+I2P4mhhM85+Bq2YlFWMYzwa7mvjtab9BQAmtNJ+K3OL43Wmxz5GmEHfRrlSpSoANC8HYAlhDsXu4Ado/UmBzYnbF6/uZRvjbYCQGtOIOwP0sMUa8FVS0J+8+/CEoeWjQJA6y4nbBAo+ovVhuxO2IkY/xmvK5miANC6NYAnCXduzuz5G6X2AOEG+AmKl+CiUQoAPt5H/zkUWimnxetK9hxBuIFdDGwZryuZowDg57OEO0/nksHkITESGbQD5was/0wsCYZIqy7HciOE0IklMC2dowgXVR9B2Vh0B+BrY8JtOf8GGZscFOPiCTUjbym2a093oPqlnF7Adh8KYW1sVWJpHEK4X/+zIvYjy3QH4K8DeJxw7wJib3FXV+g7gFAX6bPAhYHqFlkBnIJdsN46gZMC1NuUkAFgD2CvQHWfgeVhEwnlMeDaQHWfSkb2oQgZAELl278f7dYrcXwR2wDE23gykpI+VAAYC3w4QL0rKPmEConqdSxbdQiZOI9DBYCTCTMz74dY+muRWL6FJV31th/w/gD1DkiIADCIMBsnLge+HqBekb4swdKIhfCpQPU2LEQAmAy8N0C912CJRERiuwJ4OUC9HyNx7ooQAeATAepcTtjpxCJ9eYcw7wJGAlMC1Nsw7wAwijBvN3+MzdASSeV72J6S3k4MUGfDvAPAcYRZ93xxgDpFBmIJcGWAevcHNghQb0O8A0CIXVEeAH4XoF6RgboMW4PiqR1bMJeEZwBYH9jTsb6qSwLUKdKM14AbA9T7kQB1NsQzAExxrg/gJeAO5zpFWvHdAHXuRaJktp4X7JGOdVVdjc3+E8mKR/CfjNYGfNC5zoZ4BYDRwAFOdVV1U64NPiQ//idAnYcEqLNfXgFgMv7bSt+HPv1JNl2H/2rU/YE1nevsl1cAONCpnpWFeNki4mE+9gPlaSgw0bnOfnkFAO8NOZYBP3WuU8TTzQHqjP4Y4BEAtgE2cqhnZfcAC53rFPH0E2yKsKf9nevrl0cACLEd1y0B6hTxtAj/FOJbAWOc6+yTRwDYz6GOlXUDdzrXKRLCL5zrawP2ca6zTx4BYA+HOlY2lTAJGES8hZiktm+AOutqNQBsgP9Chruc6xMJ5UX8JwXt7Vxfn1oNAN6//qDbf8kX7x+s7Yi4k3DWAsASbKdfkbx40Lm+wcAOznXW1WoA2NGlFb0ew7L/iOTFw/hvT7eTc311tRoAtnNpRa+HnesTCW0B8EfnOnd2rq+uVgJAJ/7fLBUAJI+8z1vvH9a6WgkA73NrRS89/0sePe5c31bO9dXVSgDwjlIvA/Oc6xSJ4ffO9Y3G7rCDayUAbOnWCvOUc30isTyN/4vAKHcBrQSAjd1aYbyjqEgsi4FZznV6/8DWlKUAoD3/JM+edq7P+/qqKUsBQNt+SZ553wFE2Sug2QAwAntR4el55/pEYvIOABs611dTswHAu3FLgVed6xSJqVQBYB3XVsBs/N+iSnNuACoJy1LsfLgHOA0YG7a7brwDQIgdtlfTbADwvv3Xr79UDcFSzB0IfAv4M/A1Iq6Qa5L3OTySMLt3v0tW7gA0AUjqWRP4KnA/sF7itvRlIb6b2LQD73Gsr+4faYb3LKW5zvVJ8UwA7iZB7vwGdeOfyHakc32raTYAeDcsxL7rUjwfwHbozSrvO9lRzvWtptkAMMy1FQoA0rgTiLhefoC87wDWcq5vNc0GgCGurfDfc12Kqx34fOpG1OG9T4D3dbaarAQA733WpNgOI8LF0QTv83iwc32rUQCQPBoJbJq6ETV4n8e6AxCpI8pEmQHyfpTNbACouLZCWrE4dQMSKcM5GLyPzQaA3N3qFNgrqRuQyMupG1CD92zF4C/HFQDyb2rqBiSwAJiZuhE15O7RWAEg/+7DNlQpkzuArtSNqKE0AcD71iTrCz2y7G3gitSNiKgb+GbqRtQx1Lm+zD4CeDfMe3Vh2ZwHvJa6EZFcA0xL3Yg6vM/jzAYA7ymP3qsLy2Yh8CGKP6PySeDU1I3og/ciufnO9a2m2QDg3bAoOdAL7lHgcPyDc1Y8BEwmu+872vFfvBN8jUyzAcB71ZMCgI97gV2Bn6ZuiKPFwDnAJGBO2qb0aTS+CTyWAYsc66tpUJP/nfcdwPrO9ZXZc8CRwC7A0diFsyH++ziGsgzLrjMD+AVwM9m+8Ku8z+Hgt/+t2AL/PHDB0x+JBHQEvtdElI1ymr3ovN84DyGbc7tFGjXeub7XneurqdkA8Cb+LyjGO9cnEtMmzvV5ZxmuqZXbbu8GZnF5p0ijvM/f553rq6mVAPC8VyN6eG83LhLT9s71le4OYAfn+kRiWQv/R1gFAJGc2A5oc64z8wHAezvv9dGEIMkn79v/eWT8KwDAdPwzluzmXJ9IDLs71xdlDgC0FgDeAF7yakiPCc71icTgfd7mIgAAPOXSil4KAJI3ncCWznV6X1d1tRoAvCPVbig7kOTLBPxfAOYmADzh0opew7DVbCJ5sa9zfUvJUQB4yKUV7zY5QJ0ioRzsXN8T+G8xVlerAeB1/LOzeg+oSCgbAds41/mwc3198liC693gncjP2nUpt0MD1Fn6ANCO7gIkH7wDQAVL7ZYr2+CbCKGCZYIRybKR2LO653nvPbs2mufxHYhlKFOwZNs/4P/Dd1HMDoBfGq67nOqpGozltRPJqmMC1Ol9HUXzQfyj4T1ReyDSuE7sLtXzfF9MjnfIGoH/89AKlCZMsukM/H/wbo/agx5ejwCLgd841VXVDvyjc50iHk4MUOcdAeqM6tP4R8WXgI6YnRDpxwT8z/MuYL2YnQihE1iO/+AcEbMTIv24Bv9z/L6YHQjpbvwH54GoPRCpbwy2Hbv3OX5SzE6EdCL+g1NBmYIkG87D/9xeDqwbsxMhjcb/a0AFuDFmJ0RqGIFthuN9bt8ZsxMx3EiYKOm984rIQJxOmLvbD8fsRAyTCDNQ34vZCZGVDMO+SHmf03PJ8eSfetqAZ/EfrC5gq4j9EKk6kzA/ahfG7ERMXybMgF0XsxMi2LP/64Q5n72TiWTGWMK8DOzCfxMGkb58lTAX/68i9iGJqwkzcL+M2QkptQ2wae4hzuPDI/Yjie2AbsIMnpYKSwzXE+b8nYHfOpxMu4swA/gcBXx7KpmyB+F+wAoz868/BxJmACvYs5lICIOAqYQ5b18HhsbrSnpPEGYg36HAb1ElqVCf/SrYF7JSOZRwg/koJXmWkmjGE+7F31xgrWg9yZBHCBcETonYDym2Nmxpbqhz9V/idSVbQr4LWAJsHa8rUmCh5vtXgFeB4fG6kj0PEG5wp6JdhaU12wJvEe4c/Vy8rmTTzliiz1ADfH68rkjBDAWmE+7c/DP6bA3AtYQb5BXAQfG6IgVyFeHOywqWNl+wqZVvEm6gFwCbRuuNFMHHCXvx3x+vK/lwNmEH/ElK/rJFGvYBwj73a/FaDcOAmYQNAtdG643k1Xr472m5avl2rM7kzUTCzbOuln+L1hvJm2GEnZtSAV7BdhCWOkK+EKxgAeaEaL2RvGgHbiXsuVdBK1b71Um4TCvVshTYP1J/JB8uJvzF/6Novcm54wl/MP4C7BqrQ5JpXyH8+bYAy4glDbqJ8AdlIbBjrA5JJp1C+POsgv2oyQCMBl4k/IF5DdgyUp8kWz5J+JfOFZS0tmn7Yt9MYwQBfZctl5MIOwW9WmYC74nUp0L6BnFu0RagvQbL4hTi/PKvAPaL1KfCGgL8ljhBYCGwV5xuSSKh0nnXKmdF6lPhrY9NoIhx0N4Bjo3TLYmoA7iceBf/7VgiEXEyAVhGnIPXDZwTpVcSwwjg58S7+P8ErB2lZyXzBeIdxApwGZYJVvJrI2Aa8c6ZxdjeFxJAG/BD4gaBB4ExMTon7iYCc4h3rnQDR0fpWYkNwdZSxwwCL6OXg3nSBpxGvEfGavlijM4JrAP8kbgHdynwefRiJ+tGA7cR99yoYNmDJKJNCL9oqFa5D8tgJNlzAHFmj65a7kLvipLYnbCpxOqVOSifW5asAVxAnJl9q5bHKemmHlkxgXA7tvRXfobuBlLbC3iGNMf/KexxVBL7e2wCT4qTYCFwMno3ENuaWMr3GGtFapVnsQlqkhFHActJczJUgF8B7w/dSaENy9j7MumO9QvAuNAdlYE7hvifflYuXdjb4HVDd7SkdifeupB6ZSZKMZ9phwNvk/YkWYgtBBkRuK9lsSVwA3FW8PVVZgAbBu6rONgPWETak6UCzMMmh2g/guZsjN1RpXy0q5Zn0DN/rkzAfolTnzgVbAfYLwGjgva4OLYFribt49zK5VF07HJpC2xlVuoTqFrexH7RlIKstr2xT6upb/VXLrehO7hc6wQeIv2JtHJZAdyLLRwZHK7ruTAS+4z6JOmPy6rlUmy/AMm54cBPSH9C1SqvAP+F3faWxSBgMvZiL/UL21qlC0sbJgXSAZxLtm4vVy1PY1uXbRVoDFLqwJbnXgXMJf1Y1yvzseAkBXUY2Xk52Fd5DrtYDgeGBhmJ8Dqxx5yrsBehqce0vzINfeMvha1IN3+8mbIEuBtLaDmJ7M4v2AD4CPbsPJU0i3OaLddgm4MK5ZjXPgK4AptWmjdd2EKU6T3//H1PmRPp77cDm2FTn7fHUmDtjH23z5u3sDwP30ndkCwpQwCoOha4kmJs2bwI29t+Vk+ZjT3TzscmJc3HVk4u7fn338B+/YZgi2vAlraOwFa5Vcv62Nz38VgehnE9/03e/Q74KDbDT0psHLaYJ/VtqEqc0o09pqyBSI8ObNruW6Q/QVXCleewzEEiNW2KTdJJfaKq+Jbl2K9+Vl+gSoa0ASdgz82pT1yV1st0YFdEBmgs8H3y9TlLpbcsAE5HCTulRTsBvyb9Ca3SWFkBXAusV+tgijSjDftk+ALpT3CV+uU+bG6CSBBDsNVrKXPSqaxeHsWmTYtEUQ0EeZjjXuQyHe3HJwmNAM5Ajwaxy4PYL36ZZq1KhrVjJ2TqrLVFLiuwjEF7NnhMRJKYCNxCdnLa5b3MBS5GS3UlZ0Zh7wmeIv1FlLeyAkvldjJapis514alKv8uml3YX3kG+Hds1aFI4XRg2W8vxdbvp77gslBm9YzH3i2MqzjSm9U4hgD7AAcBB1OexKDLsNv7u4A7sVyIkiEKAGlshAWCidivYVG2Hu/GLvLfYCst78cSk0hGKQBkw8bYDkd7YZ++tiUfSSwWYHn+HwYe6SmLkrZIBkQBIJsGYbsd7dBTtgM2x16YpXhTPg9LQTaD3tyETwMvJWiLOFIAyJ+xWM6+8dgOtp09pZrXrxO7exhGb5rxkdixXoZlHgbbvqyr55/zsW/wK+cUnEVv3kHdxhfUXwHa/OO9LNuk1QAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>

            <div className="font-inter font-bold text-2xl my-5 mx-2 ">
              SCHEDULE
            </div>
          </div>

          {/* schedule viewBox */}
          <div className="bg-indigo-700  flex justify-center w-full h-12 mx-auto my-2 px-20 items-center divide-solid  ">
          <h1 className="inline-block text-white font-semibold text-lg text-center mx-auto">Session</h1>
          <h1 className="inline-block text-white font-semibold text-lg text-center mx-auto">Room/Building</h1>
          <h1 className="inline-block text-white font-semibold text-lg text-center mx-auto">Date</h1>
          <h1 className="inline-block text-white font-semibold text-lg text-center mx-auto">Time</h1>
      

          </div>




    <Schedulecard
            title="Meeting Extented Title"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
            <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
             <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
             <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
             <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
           <Schedulecard
            title="Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
            <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
             <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
             <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
             <Schedulecard
            title="END"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
                  <Schedulecard
            title="Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
            <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
             <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
             <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
             <Schedulecard
            title="END"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
            
    
  










         
           
        </div>

        {/* Background */}
      </div>

      <Footer />
    </>
  );
}
