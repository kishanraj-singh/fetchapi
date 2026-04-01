import { AnimationContainer } from "@/components/animation-container";
import { CtaButtons } from "@/components/cta-buttons";
import { TrySheet } from "@/components/try-sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeCard, CodeCardCode } from "@/components/ui/code-card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { APIS } from "@/constants";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-20 py-15 md:py-20 px-[5%] overflow-hidden">
      <section
        id="hero"
        className="max-w-7xl xl:w-7xl flex flex-col md:flex-row justify-between items-center gap-10 mx-auto"
      >
        <AnimationContainer className="flex flex-col items-center md:items-start gap-8">
          <Link
            href="https://github.com/kishanraj-singh/fetchapi"
            target="_blank"
          >
            <Badge
              variant="outline"
              className="h-8 text-sm p-1.5 pr-2.5 gap-2 bg-linear-to-r from-muted to-sidebar text-primary cursor-pointer relative !hover:bg-red transition-all hover:[&_svg]:translate-x-1 [&_svg]:transition-all"
            >
              <Badge>Beta</Badge>Learning Project
              <ArrowRight />
            </Badge>
          </Link>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-center md:text-start font-semibold">
            Fetch API <br />
            <span className="text-primary">Test & Learn</span>
          </h1>
          <span className="max-w-xl text-lg text-center md:text-start text-muted-foreground">
            A smarter way to explore APIs. Test endpoints, analyze responses,
            and level up your development workflow.
          </span>
          <CtaButtons />
        </AnimationContainer>
        <AnimationContainer className="relative">
          <div className="absolute -inset-6 bg-linear-to-r from-primary/30 dark:from-primary/10 via-transparent to-sky-500/30 dark:to-sky-500/10 rounded-3xl blur-2xl" />
          <CodeCard className="relative shadow-xl shadow-black hover:scale-105 duration-500 transition-all">
            <CodeCardCode>{HERO_CODE_CARD_CODE}</CodeCardCode>
          </CodeCard>
        </AnimationContainer>
      </section>

      <section
        id="explore"
        className="max-w-7xl flex flex-wrap justify-between gap-8 mx-auto relative"
      >
        {APIS.map((api) => (
          <AnimationContainer
            key={api.id}
            className="w-full md:w-[47%] xl:w-[31%] "
          >
            <Card className="p-6 dark:border">
              <CardHeader className="flex flex-row justify-between p-0">
                <Button variant="outline" size="icon-lg">
                  {api.id}
                </Button>
                <div className="flex gap-2">
                  <Badge className="bg-green-500/10 border-green-500 text-green-500">
                    FREE
                  </Badge>
                  <Badge className="bg-primary/10 border-primary text-primary">
                    No Auth
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 p-0">
                <CardTitle>{api.title}</CardTitle>
                <CardDescription>{api.description}</CardDescription>
                <InputGroup className="h-10 bg-background! border!">
                  <InputGroupAddon className="text-sm text-green-500">
                    {api.endpoints[0].method}
                  </InputGroupAddon>
                  <InputGroupInput
                    defaultValue={api.endpoints[0].path}
                    readOnly
                    className="text-muted-foreground"
                  />
                </InputGroup>
                <TrySheet api={api} />
              </CardContent>
            </Card>
          </AnimationContainer>
        ))}
      </section>

      <section className="max-w-7xl flex justify-center gap-8 mx-auto relative">
        <AnimationContainer>
          <Link
            href="https://github.com/kishanraj-singh/fetchapi"
            target="_blank"
          >
            <Button variant="ghost" className="text-primary">
              <FaGithub /> View on github <ArrowRight />
            </Button>
          </Link>
        </AnimationContainer>
      </section>
    </div>
  );
}

const HERO_CODE_CARD_CODE = `{
  "success": true,
  "data": {
    "id": 195,
    "type": "general",
    "category": "general",
    "setup": "What do you call a bear with no teeth? (v3)",
    "punchline": "A gummy bear!",
    "rating": 3.4,
    "submittedBy": "user15"
  }
}
`;
