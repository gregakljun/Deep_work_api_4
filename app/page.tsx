import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';
import EmailSignIn from '@/components/ui/AuthForms/EmailSignIn'; // Add this import

export default async function PricingPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  return (
    <>
      <Pricing
        user={user}
        products={products ?? []}
        subscription={subscription}
      />
      <section className="min-h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight m-4">
          Do less multitasking, do more deep thinking!
          </h1>
          <p className="text-lg lg:text-3xl max-w-screen-xl">
            Drowning in messages? DeepWork AI Hub connects your email, Slack, Discord, and Teams in one smart dashboard—letting you focus on what matters most. With AI managing the noise, you’ll stay deep in the zone while it curates actionable updates for your breaks. Finally, productivity meets peace of mind.
          </p>
          <EmailSignIn allowPassword={true} redirectMethod="redirect" />
      </section>
    </>
  );
}
