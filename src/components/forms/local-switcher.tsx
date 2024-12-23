'use client'

import { useTransition } from "react";
import SimpleDropDown from "./simple-dropdown";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LocalSwitcher() {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (s : string) => {
        let locale;
        switch(s) {
            case 'Español':
                locale = 'es';
                break;
            case 'English':
                locale = 'en';
                break;
            default:
                locale = 'en';
                break;
        }

        const pathArray = window.location.pathname.split('/').slice(1);
        let path = pathArray.join('/');
        if(pathArray[0] === 'es' || pathArray[0] === 'en') {
            path = pathArray.slice(1).join('/');
        }
        console.log(isPending)
        startTransition(() => {
            router.replace(`/${locale}/${path}`)
        })
    }

    const getSelected  = () => {
        switch(localActive) {
            case 'es':
                return 'Español';
            case 'en':
                return 'English';
            default:
                return undefined;
        }
    }

    return (
        <SimpleDropDown options={['English', 'Español']} onSelectChange={onSelectChange} selected={getSelected()} />
    )
}